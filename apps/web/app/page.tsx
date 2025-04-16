"use client";

import { useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function Page() {

  //TODO: emit message here to server
  const sendMessage = useSocket();
  const [message, setMessage] = useState("");



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Welcome to <span className="text-indigo-600">Web3</span>
      </h1>
       <div>
        <h3>Chat with me</h3>
        <div>
          <input type="text" placeholder="message" onChange={(e)=>setMessage(e.target.value)} />
          <button type="submit" onClick={()=>sendMessage(message)}>Send</button>
        </div>
       </div>

    </div>
  );
}