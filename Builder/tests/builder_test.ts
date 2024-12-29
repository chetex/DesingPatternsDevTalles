import { QueryBuilder } from "../builders/QueryBuilder.ts";
import { Director } from "../builders/Director.ts";
import {
    assertEquals,
    assertStringIncludes,
} from "https://deno.land/std@0.200.0/testing/asserts.ts";

/**
 * Build directly the QueryBuilder class without director.
 */
Deno.test("QueryBuilder: Basic select statement", () => {
    const builder = new QueryBuilder();
    const query = builder.select("id", "name").from("users").build();

    assertEquals(query.toString(), "SELECT id, name FROM users");
});

/**
 * Build directly the QueryBuilder class without director.
 * Complex query with order and limit.
 */
Deno.test("QueryBuilder: Select with where clause", () => {
    const builder = new QueryBuilder();
    const query = builder
        .select("id", "name")
        .from("users")
        .where("age > 18")
        .build();

    assertEquals(query.toString(), "SELECT id, name FROM users WHERE age > 18");
});

/**
 * Build directly the QueryBuilder class without director.
 * Complex query with two where clauses, order and limit.
 */
Deno.test("QueryBuilder: Complex query with order and limit", () => {
    const builder = new QueryBuilder();
    const query = builder
        .select("id", "name", "email")
        .from("users")
        .where("age > 18")
        .where("country = 'CRI'")
        .orderBy("name", "ASC")
        .limit(10)
        .build();

    const expectedQuery =
        "SELECT id, name, email FROM users WHERE age > 18 AND country = 'CRI' ORDER BY name ASC LIMIT 10";
    assertEquals(query.toString(), expectedQuery);
});

/**
 * Build directly the QueryBuilder class with director.
 * Simple query
 */
Deno.test("Director: Constructs basic query", () => {
    const builder = new QueryBuilder();
    const director = new Director(builder);
    const query = director.constructBasicQuery();

    assertEquals(query.toString(), "SELECT id, name, email FROM users");
});

/**
 * Build directly the QueryBuilder class with director.
 * Complex query
 */
Deno.test("Director: Constructs advanced query", () => {
    const builder = new QueryBuilder();
    const director = new Director(builder);
    const query = director.constructAdvancedQuery();

    assertStringIncludes(query.toString(), "SELECT id, name, email");
    assertStringIncludes(query.toString(), "FROM users");
    assertStringIncludes(
        query.toString(),
        "WHERE age > 18 AND country = 'CRI'",
    );
    assertStringIncludes(query.toString(), "ORDER BY name ASC");
    assertStringIncludes(query.toString(), "LIMIT 10");
});
