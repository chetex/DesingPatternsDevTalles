import { Query } from "../models/Query.ts";

export interface IQueryBuilder {
    select(...fields: string[]): this;
    from(table: string): this;
    where(condition: string): this;
    orderBy(field: string, order: string): this;
    limit(limit: number): this;
    build(): Query;
}