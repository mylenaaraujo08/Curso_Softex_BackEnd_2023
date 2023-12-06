interface Strategy {
    execute(a: number, b: number): number;
}

class SumStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Calculator {
    private strategy: Strategy | null = null;

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        if (this.strategy) {
            return this.strategy.execute(a, b);
        } else {
            throw new Error('Estratégia não definida.');
        }
    }
}

async function main(): Promise<void> {
    const calculator = new Calculator();
    const strategyMap: { [key: string]: Strategy } = {
        '+': new SumStrategy(),
        '-': new SubtractStrategy(),
        '*': new MultiplyStrategy()
    };

    const readline = (await import('readline')).createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite o primeiro número: ', (num1: string) => {
        readline.question('Digite o segundo número: ', (num2: string) => {
            readline.question('Digite a operação (+, -, *): ', (operation: string) => {
                const selectedStrategy = strategyMap[operation];
                if (selectedStrategy) {
                    calculator.setStrategy(selectedStrategy);
                    const result = calculator.executeStrategy(parseInt(num1), parseInt(num2));
                    console.log(`O resultado da operação é: ${result}`);
                } else {
                    console.log('Operação inválida.');
                }
                readline.close();
            });
        });
    });
}

main();
