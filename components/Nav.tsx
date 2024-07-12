"use client"

import React from 'react'
import Image from 'next/image';
import Tracky from '@public/tasks.svg';
import { signOut, useSession } from 'next-auth/react';

function Nav() {
  const {data:session} = useSession();
  let img_src = session?.user?.image;
  return (
    <nav className="bg-transparent border-gray-200 flex justify-between pl-4 pr-4 pt-2 pb-2">
        <a href="https://tracky-tracker.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Tracky} width={40} color='white' alt="Tracky Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tracky</span>
        </a>
        {
            session ? 
            <button onClick={()=>signOut()} className="flex justify-between items-center text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full">
            <img src={img_src!} height={30} width={30} className="rounded-full mr-2"/>
            Logout
            </button>:null
        }

    </nav>

  )
}

export default Nav