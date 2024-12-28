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

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */
class Query {
    public table: string;
    public fields: string[] = []; // Initialize fields
    public conditions: string[] = []; // Initialize conditions
    public orderByField: string;
    public limitField: number;

    showQuery(): string {
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

    select(...fields: string[]): QueryBuilder {
        this.query.fields = fields;
        return this;
    }

    where(condition: string): QueryBuilder {
        this.query.conditions.push(condition);
        return this;
    }    

    orderBy(field: string, order: string): QueryBuilder {
        this.query.orderByField = `${field} ${order}`;
        return this;
    }

    limit(limit: number): QueryBuilder {
        this.query.limitField = limit;
        return this;
    }

    execute(): Query {
        return this.query;
    }
}

/**
 * Main function
 * Create a basic and advanced computer using the builder pattern
 */
function main() {    
    const queryBuilder = new QueryBuilder();    
    queryBuilder.select("id", "name", "email")    
        .where("age > 18")    
        .where("country = 'Cri'")    
        .orderBy("name", "ASC")    
        .limit(10);  
    
    console.log('%cConsulta:', COLORS.red);
    const query = queryBuilder.execute();
    console.log(query.showQuery());
}

// Call main function
main();