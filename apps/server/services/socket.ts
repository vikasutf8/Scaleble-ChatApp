import { log } from "console";
import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Socket service is running");
    this._io = new Server(8001);
  }
  get io() {
    return this._io;
  }
  // start() {
  //     this.io.on('connection', (socket) => {
  //         console.log('A user connected');

  //         socket.on('disconnect', () => {
  //             console.log('A user disconnected');
  //         });
  //     });

  //     this.io.listen(8001);
  // }

  public initListener() {
    console.log("initListener");
    
    const io = this.io;
    io.on("connect", async (socket) => {
      console.log("A user connected", socket.id);

      //when ever a new message is received/send from the client
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("new message received", message);
        // await io.emit('event:message', message);
      });

      await socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  }
}
export default SocketService;
