import { Query } from "../models/Query.ts";
import { IQueryBuilder } from "../interfaces/IQueryBuilder.ts";

export class QueryBuilder implements IQueryBuilder {
    private query: Query;

    constructor() {
        this.query = new Query();
    }

    public select(...fields: string[]): this {
        this.query.setFields(fields);
        return this;
    }

    public from(table: string): this {
        this.query.setTable(table);
        return this;
    }

    public where(condition: string): this {
        this.query.addCondition(condition);
        return this;
    }

    public orderBy(field: string, order: string): this {
        this.query.setOrderByField(`${field} ${order}`);
        return this;
    }

    public limit(limit: number): this {
        this.query.setLimitField(limit);
        return this;
    }

    public build(): Query {
        return this.query;
    }
}
