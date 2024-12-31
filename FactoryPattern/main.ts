import { RestaurantFactory } from "./Factory/RestaurantFactory.ts";
import { RestaurantHardFactory } from "./Factory/RestaurantHardFactory.ts";
import { RestaurantVeggiFactory } from "./Factory/RestaurantVeggiFactory.ts";
import { BurgerTypeEnum } from "./enum/BurgerTypeEnum.ts";

// Create Global map with RestaurantFactory and BurgerTypeEnum
const restaurantMap = new Map<BurgerTypeEnum, RestaurantFactory>();

function init() {
    restaurantMap.set(BurgerTypeEnum.Hard, new RestaurantHardFactory());
    restaurantMap.set(BurgerTypeEnum.Veggi, new RestaurantVeggiFactory());
}

function main() {
    const burgerType = prompt(
        "¿Qué tipo de hamburguesa quieres? ( Hard/Veggi )",
    );

    // Verificar si enumKey y restaurant son válidos
    const restaurant = restaurantMap.get(
        BurgerTypeEnum[burgerType as keyof typeof BurgerTypeEnum],
    );
    if (!restaurant) {
        throw new Error("Opción no válida");
    }
    restaurant.orderHamburger();
}

init();
main();
