import { Resolver, Query } from "@nestjs/graphql";
import { User } from "../types/User.type";
@Resolver(of => User)
export class UserResolver {
  users : User[] = [
    {
      id: 1,
      name: "Malik Faizan Zafar",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      id: 2,
      name: "Touqeer Shakeel",
      photo: "https://i.mdel.net/i/db/2018/8/950736/950736-500w.jpg"
    },
    {
      id: 3,
      name: "Mike Cernik",
      photo: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/social-experiment-guy-created-fake-tinder-profile-hot-model-pictures-germanlifter-5acdd429b307f__700.jpg"
    }
  ]

  @Query(returns => [User])
  getUsers(){
    return this.users;
  }
}