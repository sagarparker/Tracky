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
          :<button onClick={()=>signIn()} className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Login</button>
        }
      </div>

  </main>
  );
}
