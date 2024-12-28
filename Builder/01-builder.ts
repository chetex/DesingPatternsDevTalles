// Import colors from colors.ts
import { COLORS } from './helpers/colors.ts';

/**
 * CLASS holds computer class with CPU, RAM, GPU and HDD properties
 */
class Computer {
   public cpu: string;
   public ram: string;
   public gpu: string;
   public hdd: string;

   /**
    * Method to show Computer properties
    */
   public showComputer(): void {
      console.log(`Computer: ${this.cpu}, 
        ${this.ram}, 
        ${this.gpu},
        ${this.hdd}`);
   }
}

/**
 * Class builder computer with CPU, RAM, GPU and HDD properties
 */
class ComputerBuilder {
    private computer: Computer;

    constructor() {
        // Initialize the computer object
        this.computer = new Computer();
    }

   /**
    * Method to set CPU
    * @param {string} cpu
    */
   public setCpu(cpu: string): ComputerBuilder {
      this.computer.cpu = cpu;
      return this;
   }

   /**
    * Method to set RAM
    * @param {string} ram
    */
   public setRam(ram: string): ComputerBuilder {
      this.computer.ram = ram;
      return this;
   }

   /**
    * Method to set GPU
    * @param {string} gpu
    */
   public setGpu(gpu: string): ComputerBuilder {
      this.computer.gpu = gpu;
      return this;
   }

   /**
    * Method to set HDD
    * @param {string} hdd
    */
   public setHdd(hdd: string): ComputerBuilder {
      this.computer.hdd = hdd;
      return this;
   }

   /**
    * Method to build Computer
    */
   build() {
    return this.computer;
  }
}

/**
 * Main function
 * Create a basic and advanced computer using the builder pattern
 */
function main() {
    const basicComputerBuilder = new ComputerBuilder();
    basicComputerBuilder.setCpu("Intel i5")
      .setRam("16GB")
      .setGpu("Nvidia GeForce GTX 1080")
      .setHdd("1TB");

    console.log('%cComputadora básica:', COLORS.blue);
    const computer = basicComputerBuilder.build();
    computer.showComputer();

    const advancedComputerBuilder = new ComputerBuilder();
    advancedComputerBuilder.setCpu("Intel i7")
      .setRam("32GB")
      .setGpu("Nvidia GeForce GTX 1080")
      .setHdd("2TB");

    console.log('%cComputadora avanzada:', COLORS.red);
    const computer2 = advancedComputerBuilder.build();
    computer2.showComputer();
}

main();