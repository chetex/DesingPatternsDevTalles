import {
    assertEquals,
    assertStringIncludes,
} from "https://deno.land/std@0.200.0/testing/asserts.ts";
import { RestaurantHardFactory } from "../Factory/RestaurantHardFactory.ts";
import { RestaurantVeggiFactory } from "../Factory/RestaurantVeggiFactory.ts";

/**
 * Build directly the QueryBuilder class without director.
 */
Deno.test("Hard hamburger", () => {
    const restaurant = new RestaurantHardFactory();
    restaurant.orderHamburger();

    // ¿?
    // assertEquals(restaurant.toString(), "SELECT id, name FROM users");
});

Deno.test("Veggi hamburger", () => {
    const restaurant = new RestaurantVeggiFactory();
    restaurant.orderHamburger();
});
