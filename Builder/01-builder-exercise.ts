import { QueryBuilder } from "./builders/QueryBuilder.ts";
import { Director } from "./builders/Director.ts";

function main() {
    const builder = new QueryBuilder();
    const director = new Director(builder);

    console.log("Consulta básica:");
    const basicQuery = director.constructBasicQuery();
    console.log(basicQuery.toString());

    console.log("Consulta avanzada:");
    const advancedQuery = director.constructAdvancedQuery();
    console.log(advancedQuery.toString());
}

main();