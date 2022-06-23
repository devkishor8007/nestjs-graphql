
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface BookSchemas {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    books(): BookSchemas[] | Promise<BookSchemas[]>;
}

type Nullable<T> = T | null;
