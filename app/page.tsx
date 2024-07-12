"use client"

import Nav from "@components/Nav";
import { TaskHolder } from "@components/TaskHolder/TaskHolder";
import { signIn,signOut,useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return (
  <main>
      <Nav></Nav>
      <div className="mainDiv">
        {session ? <TaskHolder></TaskHolder>
          :<button onClick={()=>signIn()} className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
        }
      </div>

  </main>
  );
}
