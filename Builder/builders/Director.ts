import { IQueryBuilder } from "../interfaces/IQueryBuilder.ts";
import { Query } from "../models/Query.ts";

export class Director {
    private builder: IQueryBuilder;

    constructor(builder: IQueryBuilder) {
        this.builder = builder;
    }

    public constructBasicQuery(): Query {
        return this.builder.select("id", "name", "email").from("users").build();
    }

    public constructAdvancedQuery(): Query {
        return this.builder
            .select("id", "name", "email")
            .from("users")
            .where("age > 18")
            .where("country = 'CRI'")
            .orderBy("name", "ASC")
            .limit(10)
            .build();
    }
}
