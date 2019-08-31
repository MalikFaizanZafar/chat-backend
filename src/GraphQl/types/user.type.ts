import { Field, ID,  ObjectType, Int } from 'type-graphql';

@ObjectType()
export class User {
  
  @Field(type => ID, {nullable: true})
  id: number;

  @Field()
  name: string;

  @Field()
  photo: string;
  
}