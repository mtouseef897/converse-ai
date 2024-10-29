"use client";
import { DrizzleChat } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { HomeIcon, MessageCircle, PlusCircle, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import DeleteChatButton from "./ui/DeleteChatButton";
import { useState } from "react";
import ChatComponent from "./ui/RenameChatButton";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro: boolean;
};

// Define the type for a chat object
interface Chat {
  id: number;
  pdfName: string;
}

// Define props type for the ChatList component
interface ChatListProps {
  initialChats: Chat[];
}

const ChatSideBar = ({ chats, chatId, isPro }: Props) => {
  const [chatstoShow, setChatstoShow] = useState<Chat[]>(chats);

  const handleDeleteSuccess = (deletedChatId: number) => {
    setChatstoShow((prevChats) =>
      prevChats.filter((chat) => chat.id !== deletedChatId)
    );
  };

  return (
    <div className="relative w-full h-screen p-4 text-gray-200 bg-gray-900 overflow-hidden">
      <Link href="/">
        <Button className="w-full border-dashed border-white border mb-4">
          <PlusCircle className="mr-2 w-4 h-4" />
          New Chat
        </Button>
      </Link>

      {/* Scrollable Chat List */}
      <div className="flex flex-col gap-2 h-[calc(100vh-5rem)] overflow-y-auto">
        {chats.length === 0 ? (
          <p className="text-gray-500">No chats available.</p>
        ) : (
          chatstoShow.map((chat) => (
            <Link key={chat.id} href={`/chat/${chat.id}`} className="  ">
              <div
                className={cn(
                  "rounded-lg p-3 text-slate-300 flex items-center ",
                  {
                    "bg-blue-600 text-white": chat.id === chatId,
                    "hover:text-white": chat.id !== chatId,
                  }
                )}
              >
                {/* <p className="w-full  text-sm truncate whitespace-nowrap text-ellipsis"> */}
                {/* {chat.pdfName} */}
                <ChatComponent
                  chat={chat}
                  handleDeleteSuccess={handleDeleteSuccess}
                />
                {/* </p> */}

                {/* <DeleteChatButton
                  chatId={chat.id}
                  onDeleteSuccess={handleDeleteSuccess}
                /> */}
              </div>
            </Link>
          ))
        )}
      </div>
      <Link href="/" className="absolute bottom-0 left-0 right-0 mx-4">
        <Button className="w-full border-gray-200 border mb-4 hover:bg-gray-50/[0.34] ">
          <HomeIcon className="mr-2 w-4 h-4" />
          Home
        </Button>
      </Link>
    </div>
  );
};

export default ChatSideBar;
