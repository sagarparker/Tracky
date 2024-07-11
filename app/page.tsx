"use client"

import { TaskHolder } from "@components/TaskHolder/TaskHolder";
import { signIn,signOut,useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return (
  <main className="mainDiv">

      {session ? 
        <div>
          <div className="flex justify-center items-center">
          <button onClick={()=>signOut()} className="flex justify-between items-center text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full">
            <img src={session.user?.image!} height={30} width={30} className="rounded-full mr-2"/>
            Logout</button>
          </div>
          <TaskHolder></TaskHolder>
        </div>

        :<button onClick={()=>signIn()} className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
      }
  </main>
  );
}
