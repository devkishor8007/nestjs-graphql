import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookSchemas {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  price: number;
}
