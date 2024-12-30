import { IHamburger } from "../models/IHamburger.ts";

/**
 * Abstract class for RestaurantFactory
 * This class is abstract because it has to be implemented by the concrete classes
 */
export abstract class RestaurantFactory {
    protected abstract createHamburger(): IHamburger;

    public orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
        hamburger.cook();
        hamburger.eat();
        hamburger.clean();
    }
}
