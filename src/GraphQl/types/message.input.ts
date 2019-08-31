import { InputType, Field } from 'type-graphql'

@InputType()
export class MessageInput {
  @Field()
  sender: number;

  @Field()
  receiver: number;

  @Field()
  content: string;

}