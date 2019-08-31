import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {

  otherUser = "";

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send')
  findAll(client: Client, data: any) {
    client.broadcast.emit('receive', data);
    // if(this.otherUser != ""){
    //   if(data["user"] === 1){
    //     client.broadcast.to(this.otherUser).emit('receive', data["message"]);
    //   }else {
    //     client.broadcast.to(this.otherUser).emit('receive', data["message"]);
    //   }
    // }
    // this.otherUser = client.id;
    // this.server.to(this.testClients[0]).emit( 'send msg', {somedata : "daaaatttttaaaa"} );
    // return { event: 'events', data: 1947 };
  }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    return data;
  }
}