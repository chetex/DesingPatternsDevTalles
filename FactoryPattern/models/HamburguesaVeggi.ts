import { IHamburger } from "./IHamburger.ts";

/**
 * Class for Hamburger
 */
export class HamburguesaVeggi implements IHamburger {
    prepare(): void {
        console.log("Preparing Hamburger with veggies");
    }

    cook(): void {
        console.log("Cooking Hamburger with veggies");
    }

    eat(): void {
        console.log("Eating Hamburger with veggies");
    }

    clean(): void {
        console.log("Cleaning Hamburger with veggies");
    }
}
