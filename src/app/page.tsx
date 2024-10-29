
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/fileUpload";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { ArrowRight, LogIn } from "lucide-react";
export default async function Home()  {
  const {userId} = await auth();
  const  isAuth = !! userId;
  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  return (
 <div className="w-screen min-h-screen bg-gradient-to-tr from-rose-100 to-teal-100 ">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center">
        <h1 className="mr-3 text-5xl font-semibold">Converse Ai</h1>
        <UserButton afterSignOutUrl="/"/>
      </div>
      <div className="flex mt-2">
       {isAuth && firstChat&& (
         <>
         <a href={`/chat/${firstChat.id}`}>
           <Button>
             Go to Chats <ArrowRight className="ml-2" />
           </Button>
         </a> 
         </>)}
      </div>
      <p className="max-w-xl mt-2 text-lg text-slate-600"> join million of students researcher and professionals to instantly answer question and understand it</p>
    <div className="w-full mt-4">
      { isAuth?(<FileUpload/>):(
        <a href="sign-in">
  <Button>Login to get Started! 
          <LogIn className="w-4 h-4 ml-2"/>
        </Button>
        </a>
      ) }
    </div>
    </div> 
  </div>
 </div>
  );
}
