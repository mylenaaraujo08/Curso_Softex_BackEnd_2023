class Computer {
    RAM: string;
    HDD: string;
    CPU: string;
    type: string;

    constructor(ram: string, hdd: string, cpu: string, type: string) {
        this.RAM = ram;
        this.HDD = hdd;
        this.CPU = cpu;
        this.type = type;
    }

    toString(): string {
        return `${this.type} - RAM: ${this.RAM}GB, HDD: ${this.HDD}GB, CPU: ${this.CPU}GHz`;
    }
}

class PC extends Computer {
    constructor(ram: string, hdd: string, cpu: string) {
        super(ram, hdd, cpu, 'PC');
    }
}

class Server extends Computer {
    constructor(ram: string, hdd: string, cpu: string) {
        super(ram, hdd, cpu, 'Server');
    }
}

class ComputerFactory {
    static getComputer(type: string, ram: string, hdd: string, cpu: string): Computer | null {
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

if (pc instanceof Computer && server instanceof Computer) {
    console.log(pc.toString());
    console.log(server.toString());
}
