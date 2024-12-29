import { COLORS } from './helpers/colors.ts';

class Car {
    // Clase Car, puede tener GPS, computadora de viaje y asientos.
}

class Manual {
    // Clase Manual, describe las características de un Car.
}

// Interfaz del Builder
interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: any): void;
    setTripComputer(hasTripComputer: boolean): void;
    setGPS(hasGPS: boolean): void;
}

// Builder concreto para construir Car
class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }

    setSeats(seats: number): void {
        // Configura el número de asientos.
    }

    setEngine(engine: any): void {
        // Instala el motor especificado.
    }

    setTripComputer(hasTripComputer: boolean): void {
        // Instala la computadora de viaje.
    }

    setGPS(hasGPS: boolean): void {
        // Instala el sistema de GPS.
    }

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}

// Builder concreto para construir Manual
class CarManualBuilder implements Builder {
    private manual: Manual;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.manual = new Manual();
    }

    setSeats(seats: number): void {
        // Documenta las características de los asientos.
    }

    setEngine(engine: any): void {
        // Agrega instrucciones del motor.
    }

    setTripComputer(hasTripComputer: boolean): void {
        // Agrega instrucciones para la computadora de viaje.
    }

    setGPS(hasGPS: boolean): void {
        // Agrega instrucciones para el GPS.
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }
}

// Director, gestiona el proceso de construcción
class Director {
    constructSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("SportEngine");
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    constructSUV(builder: Builder): void {
        builder.reset();
        builder.setSeats(5);
        builder.setEngine("SUVEngine");
        builder.setTripComputer(false);
        builder.setGPS(true);
    }
}

// Cliente
class Application {
    makeCar(): void {
        const director = new Director();

        const carBuilder = new CarBuilder();
        director.constructSportsCar(carBuilder);
        const car = carBuilder.getProduct();

        const manualBuilder = new CarManualBuilder();
        director.constructSportsCar(manualBuilder);
        const manual = manualBuilder.getProduct();

        // El producto final puede ser obtenido de los builders.
    }
}
