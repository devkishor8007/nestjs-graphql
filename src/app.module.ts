import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    BookModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      installSubscriptionHandlers: true,
      // code first ways
      // src/schema.graphql will be auto generated
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // to use - install ts-morph
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
