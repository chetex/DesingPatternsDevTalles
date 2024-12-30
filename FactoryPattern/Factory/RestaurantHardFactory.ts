import { HamburguesaHard } from "../models/HamburguesaHard.ts";
import { IHamburger } from "../models/IHamburger.ts";
import { RestaurantFactory } from "./RestaurantFactory.ts";

/**
 * Concrete class for RestaurantJapanFactory
 */
export class RestaurantHardFactory extends RestaurantFactory {
    protected createHamburger(): IHamburger {
        return new HamburguesaHard();
    }
}
