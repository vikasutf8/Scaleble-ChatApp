'use client'

import React, { useCallback, useEffect }  from "react";
import {io } from "socket.io-client";

interface SocketContextProps{
    children ?: React.ReactNode
}

interface ISocketContext{
    sendMessage : (message : string) => any;
}
const SocketContext =React.createContext<ISocketContext | null>(null);

export const SocketProvider : React.FC<SocketContextProps> = ({children}) => {
    //now implement ISocketContext internal functions
    const sendMessage:ISocketContext['sendMessage'] = useCallback((message:string)=>{
         console.log("sendMessage ISocketContext", message);
    },[])
//TODO : implement input field and send buttom on sendMessage ->that send the message to the server --using socket.io-client

    useEffect(()=>{
        const _socket = io("http://localhost:8009"); //connect to the server

        return () => {
            _socket.disconnect();
        }
    })


    return (

        <SocketContext.Provider value={null}>
            {   children }
        </SocketContext.Provider>
    )
}

export const useSocket = () => {}