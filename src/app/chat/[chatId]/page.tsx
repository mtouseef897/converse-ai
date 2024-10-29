import ChatComponent from "@/components/ChatComponent";
import ChatSideBar from "@/components/ChatSideBar";
import PDFViewer from "@/components/PDFViewer";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
// import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }
  
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats || !_chats.length) {
    return redirect("/");
  }
  
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/");
  }

  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
  // const isPro = await checkSubscription();

  return (
    <div className="flex h-screen">
      {/* Chat Sidebar */}
      <div className="flex-none w-64 max-h-screen overflow-y-auto">
        <ChatSideBar chats={_chats} chatId={parseInt(chatId)} isPro={false} />
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 max-h-screen overflow-y-auto p-4">
        <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
      </div>

      {/* Chat Component */}
      <div className="flex-1 border-l border-l-slate-200 max-h-screen overflow-y-auto">
        <ChatComponent chatId={parseInt(chatId)} />
      </div>
    </div>
  );
};

export default ChatPage;
