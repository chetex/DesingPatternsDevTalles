import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.201.0/testing/asserts.ts";

// Enums y clases que usamos en el código
enum BurgerTypeEnum {
    Hard = "Hard",
    Veggi = "Veggi",
}

class RestaurantFactory {
    orderHamburger() {
        throw new Error("Method not implemented.");
    }
}

class RestaurantHardFactory extends RestaurantFactory {
    override orderHamburger() {
        console.log("Hard hamburger ordered!");
    }
}

class RestaurantVeggiFactory extends RestaurantFactory {
    override orderHamburger() {
        console.log("Veggi hamburger ordered!");
    }
}

// Código principal
const burguerTypeRestaurantMap = new Map<BurgerTypeEnum, RestaurantFactory>();

function init() {
    burguerTypeRestaurantMap.set(
        BurgerTypeEnum.Hard,
        new RestaurantHardFactory(),
    );
    burguerTypeRestaurantMap.set(
        BurgerTypeEnum.Veggi,
        new RestaurantVeggiFactory(),
    );
}

function main(burgerType: string) {
    const restaurant = burguerTypeRestaurantMap.get(
        BurgerTypeEnum[burgerType as keyof typeof BurgerTypeEnum],
    );
    if (!restaurant) {
        throw new Error("Opción no válida");
    }
    restaurant.orderHamburger();
}

// Pruebas
Deno.test("init function initializes map correctly", () => {
    init();
    assertEquals(burguerTypeRestaurantMap.size, 2);
    assertEquals(
        burguerTypeRestaurantMap.get(BurgerTypeEnum.Hard) instanceof
            RestaurantHardFactory,
        true,
    );
    assertEquals(
        burguerTypeRestaurantMap.get(BurgerTypeEnum.Veggi) instanceof
            RestaurantVeggiFactory,
        true,
    );
});

Deno.test("main function handles valid input (Hard)", () => {
    init();

    // Mock de la clase RestaurantHardFactory
    const hardFactory = burguerTypeRestaurantMap.get(BurgerTypeEnum.Hard);
    if (hardFactory) {
        const originalOrderHamburger = hardFactory.orderHamburger;
        let orderCalled = false;
        hardFactory.orderHamburger = () => {
            orderCalled = true;
        };

        main("Hard");

        assertEquals(orderCalled, true);
        hardFactory.orderHamburger = originalOrderHamburger; // Restaurar la función original
    }
});

Deno.test("main function handles valid input (Veggi)", () => {
    init();

    // Mock de la clase RestaurantVeggiFactory
    const veggiFactory = burguerTypeRestaurantMap.get(BurgerTypeEnum.Veggi);
    if (veggiFactory) {
        const originalOrderHamburger = veggiFactory.orderHamburger;
        let orderCalled = false;
        veggiFactory.orderHamburger = () => {
            orderCalled = true;
        };

        main("Veggi");

        assertEquals(orderCalled, true);
        veggiFactory.orderHamburger = originalOrderHamburger; // Restaurar la función original
    }
});

Deno.test("main function throws error on invalid input", () => {
    init();
    assertThrows(
        () => {
            main("Invalid");
        },
        Error,
        "Opción no válida",
    );
});
