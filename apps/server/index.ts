import http from 'http';  
import SocketService from './services/socket';


async function startServer() {

    const socketService = new SocketService();
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });

    socketService.io.attach(server);
    
    socketService.initListener();

    server.listen(8008);
    console.log('Server is running on port 8008');
}

startServer();