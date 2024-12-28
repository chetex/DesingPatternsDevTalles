/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import { COLORS } from './helpers/colors.ts';

// Create new interface for Query
interface Query {
    getTable(): string;
    getFields(): string[];
    getConditions(): string[];
    getOrderByField(): string;
    getLimitField(): number;
    setTable(table: string): void;
    setFields(fields: string[]): void;
    setConditions(conditions: string[]): void;
    setOrderByField(orderByField: string): void;
    setLimitField(limitField: number): void;
    showQuery(): string;
}

/**
 * Class Query
 */
class Query implements Query {
    private table: string;
    private fields: string[] = []; // Initialize fields
    private conditions: string[] = []; // Initialize conditions
    private orderByField: string;
    private limitField: number;

    public getTable(): string {
        return this.table;
    }

    public getFields(): string[] {
        return this.fields;
    }

    public getConditions(): string[] {
        return this.conditions;
    }

    public getOrderByField(): string {
        return this.orderByField;
    }

    public getLimitField(): number {
        return this.limitField;
    }

    public setTable(table: string): void {
        this.table = table;
    }

    public setFields(fields: string[]): void {
        this.fields = fields;
    }

    public setConditions(conditions: string[]): void {
        this.conditions = conditions;
    }

    public setOrderByField(orderByField: string): void {
        this.orderByField = orderByField;
    }

    public setLimitField(limitField: number): void {
        this.limitField = limitField;
    }

    public showQuery(): string {
        let query = `Select ${this.fields.join(", ")} from ${this.table || "undefined"}`;

        if (this.conditions.length > 0) {
            query += ` where ${this.conditions.join(" and ")}`;
        }

        if (this.orderByField) {
            query += ` order by ${this.orderByField}`;
        }

        if (this.limitField) {
            query += ` limit ${this.limitField}`;
        }
        
        return query;
    }
}

class QueryBuilder {
    private query: Query;

    constructor() {
        this.query = new Query();
    }

    public select(...fields: string[]): QueryBuilder {
        this.query.setFields(fields);
        return this;
    }

    public where(condition: string): QueryBuilder {
        this.query.getConditions().push(condition);
        return this;
    }    

    public orderBy(field: string, order: string): QueryBuilder {
        this.query.setOrderByField(`${field} ${order}`);
        return this;
    }

    public limit(limit: number): QueryBuilder {
        this.query.setLimitField(limit);
        return this;
    }

    public execute(): Query {
        return this.query;
    }
}

/**
 * Main function
 * Create a basic and advanced computer using the builder pattern
 */
function main() {    
    // First query for users
    const queryBuilderUsers = new QueryBuilder();    
    queryBuilderUsers.select("id", "name", "email")    
        .where("age > 18")    
        .where("country = 'Cri'")    
        .orderBy("name", "ASC")    
        .limit(10);  
    
    console.log('%cConsulta:', COLORS.red);
    const query = queryBuilderUsers.execute();
    console.log(query.showQuery());

    // Second query for cars
    const queryBuilderCars = new QueryBuilder();    
    queryBuilderCars.select("id", "name", "brand")    
        .where("price > 10000")    
        .where("year > 2000")    
        .orderBy("name", "ASC");  
    
    console.log('%cConsulta:', COLORS.red);
    const query2 = queryBuilderCars.execute();
    console.log(query2.showQuery());
}

// Call main function
main();