import { HamburguesaVeggi } from "../models/HamburguesaVeggi.ts";
import { IHamburger } from "../models/IHamburger.ts";
import { RestaurantFactory } from "./RestaurantFactory.ts";

/**
 * Concrete class for RestaurantJapanFactory
 */
export class RestaurantVeggiFactory extends RestaurantFactory {
    protected createHamburger(): IHamburger {
        return new HamburguesaVeggi();
    }
}
