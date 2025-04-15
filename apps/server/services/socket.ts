import { Server } from 'socket.io';


class SocketService {
    private _io: Server;
    constructor() {
        console.log('Socket service is running');
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
}


export default SocketService;