import { RestaurantFactory } from "./Factory/RestaurantFactory.ts";
import { RestaurantHardFactory } from "./Factory/RestaurantHardFactory.ts";
import { RestaurantVeggiFactory } from "./Factory/RestaurantVeggiFactory.ts";

function main() {
    let restaurant: RestaurantFactory;

    const burgerType = prompt(
        "¿Qué tipo de hamburguesa quieres? ( Hard/Veggi )",
    );

    switch (burgerType) {
        case "Hard":
            restaurant = new RestaurantHardFactory();
            break;

        case "Veggi":
            restaurant = new RestaurantVeggiFactory();
            break;

        default:
            throw new Error("Opción no válida");
    }

    restaurant.orderHamburger();
}

main();
