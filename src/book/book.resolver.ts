import { Query, Resolver } from '@nestjs/graphql';
import { BookSchemas } from './book.schemas';

@Resolver(() => BookSchemas)
export class BookResolver {
  @Query(() => [BookSchemas], { name: 'books' })
  getAllData() {
    return [
      {
        id: 1,
        title: 'One',
        price: 500,
      },
      {
        id: 2,
        title: 'Two',
        price: 600,
      },
      {
        id: 3,
        title: 'Three',
        price: 800,
      },
      {
        id: 4,
        title: 'Four',
      },
    ];
  }
}
