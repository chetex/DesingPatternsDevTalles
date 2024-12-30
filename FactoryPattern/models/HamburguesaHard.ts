import { IHamburger } from "./IHamburger.ts";

/**
 * Class for Hamburger
 */
export class HamburguesaHard implements IHamburger {
    prepare(): void {
        console.log("Preparing Hamburger for hard cheese");
    }

    cook(): void {
        console.log("Cooking Hamburger for hard cheese");
    }

    eat(): void {
        console.log("Eating Hamburger for hard cheese");
    }

    clean(): void {
        console.log("Cleaning Hamburger for hard cheese");
    }
}
