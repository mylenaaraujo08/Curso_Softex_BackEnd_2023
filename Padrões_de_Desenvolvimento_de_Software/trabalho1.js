class Computer {
    constructor(ram, hdd, cpu, type) {
        this.RAM = ram;
        this.HDD = hdd;
        this.CPU = cpu;
        this.type = type;
    }

    getRAM() {
        return this.RAM;
    }

    getHDD() {
        return this.HDD;
    }

    getCPU() {
        return this.CPU;
    }

    getType() {
        return this.type;
    }

    toString() {
        return `${this.type} - RAM: ${this.RAM}GB, HDD: ${this.HDD}GB, CPU: ${this.CPU}GHz`;
    }
}

class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'PC');
    }
}

class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'Server');
    }
}

class ComputerFactory {
    static getComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === 'pc') {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === 'server') {
            return new Server(ram, hdd, cpu);
        }
        return null;
    }
}

let pc = ComputerFactory.getComputer('PC', '8', '713', '6.4');
let server = ComputerFactory.getComputer('Server', '33', '2324', '6.12');

if (pc) {
    console.log(pc.toString());
}

if (server) {
    console.log(server.toString());
}
