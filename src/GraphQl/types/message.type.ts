import { Field, ID,  ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Message {
  
  @Field(type => ID, {nullable: true})
  id: number;

  @Field()
  senderId: number;

  @Field()
  receiverId: number;

  @Field()
  content: string;
  
}