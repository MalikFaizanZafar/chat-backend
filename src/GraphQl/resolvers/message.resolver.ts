import { Resolver, Query, Mutation, Args, Subscription } from "@nestjs/graphql";
import { Message } from "../types/message.type";
import { MessageInput } from "../types/message.input";
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub()
@Resolver(of => Message)
export class MessageResolver {
  messages: Message[] =  [
    {
      id: 101,
      senderId: 1,
      receiverId: 2,
      content: "This is a Message from 1 to 2",
    },
    {
      id: 102,
      senderId: 1,
      receiverId: 2,
      content: "This is a Message from 1 to 2",
    },
    {
      id: 103,
      senderId: 2,
      receiverId: 1,
      content: "This is a Message from 2 to 1",
    },
    {
      id: 104,
      senderId: 1,
      receiverId: 3,
      content: "This is a Message from 1 to 3",
    },
    {
      id: 105,
      senderId: 3,
      receiverId: 2,
      content: "This is a Message from 3 to 2",
    },
    {
      id: 106,
      senderId: 3,
      receiverId: 2,
      content: "This is a Message from 3 to 2",
    }
  ]
  @Query(returns => [Message])
  getMessages() : Message[]{
    return this.messages;
  }

  @Mutation(returns => Message)
  addNewMessage(@Args('input') newMessage : MessageInput): Message {
    let message : Message = {
      id: Math.floor(Math.random()*1000),
      senderId: newMessage.sender,
      receiverId: newMessage.receiver,
      content: newMessage.content
    }
    this.messages.push(message)
    pubsub.publish('messageAdded', { messageAdded: message });
    return message;
  }

  // @Subscription('messageAdded')
  // messageAdded(){
  //   return pubsub.asyncIterator('messageAdded'); 
  // }

  // @Subscription(returns => Message)
  // messageAdded() {
  //   return pubsub.asyncIterator('messageAdded');
  // }

  @Subscription(returns => Message, {
    filter: (payload, Args) =>
      payload.messageAdded.receiverId === Args.receiverId
  })
  messageAdded(@Args('receiverId') receiverId : number) {
    return pubsub.asyncIterator('messageAdded');
  }
}