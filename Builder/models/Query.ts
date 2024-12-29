export class Query {
    private table: string = "";
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderByField: string = "";
    private limitField: number = 0;

    public setTable(table: string): void {
        this.table = table;
    }

    public setFields(fields: string[]): void {
        this.fields = fields;
    }

    public addCondition(condition: string): void {
        this.conditions.push(condition);
    }

    public setOrderByField(orderByField: string): void {
        this.orderByField = orderByField;
    }

    public setLimitField(limitField: number): void {
        this.limitField = limitField;
    }

    public toString(): string {
        let query = `SELECT ${this.fields.join(", ")} FROM ${this.table || "undefined"}`;
        if (this.conditions.length) query += ` WHERE ${this.conditions.join(" AND ")}`;
        if (this.orderByField) query += ` ORDER BY ${this.orderByField}`;
        if (this.limitField) query += ` LIMIT ${this.limitField}`;
        return query;
    }
}
