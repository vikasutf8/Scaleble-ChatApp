'use client'


import React, { useCallback, useContext, useEffect, createContext } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextProps {
    children?: React.ReactNode
}
interface ISocketContext {
    socket: Socket | any;
    sendMessage: (message: string) => any;
}
export const SocketContext = createContext<ISocketContext | null>(null);

// custom hook for using SocketContext
export const useSocket = () => {
    const state = useContext(SocketContext);
    if (!state) {
      throw new Error("useSocket must be used within a SocketProvider");
    }
    return state;
  };

export const SocketProvider: React.FC<SocketContextProps> = ({ children }) => {
    //now implement ISocketContext internal functions
    const sendMessage: ISocketContext['sendMessage'] = useCallback((message: string) => {
        console.log("sendMessage ISocketContext", message);
    }, [])

    //TODO : implement input field and send buttom on sendMessage ->that send the message to the server --using socket.io-client
    useEffect(() => {
        const _socket = io("http://localhost:8009"); //connect to the server

        return () => {
            _socket.disconnect();
        }
    })
    return (
        <SocketContext.Provider value={{ socket: Socket, sendMessage }}>
            {children}
        </SocketContext.Provider>
    )
}

