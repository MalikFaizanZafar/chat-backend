import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MessageResolver } from './GraphQl/resolvers/message.resolver';
import { UserResolver } from './GraphQl/resolvers/user.resolver';

@Module({
  imports: [EventsModule, GraphQLModule.forRoot({debug: false, installSubscriptionHandlers: true, playground: true, typePaths: ['./**/*.graphql'],autoSchemaFile: 'schema.gql'})],
  controllers: [AppController],
  providers: [AppService, MessageResolver, UserResolver],
})
export class AppModule {}
