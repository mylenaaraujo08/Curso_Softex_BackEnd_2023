interface Observer {
    update(): void;
}

class Editor {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.update();
        });
    }
}

class TextEditor implements Observer {
    private lines: string[] = [];

    constructor(private editor: Editor) {
        this.editor.attach(this);
    }

    update(): void {
        console.log('Conteúdo salvo:', this.lines.join('\n'));
    }

    insertLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber - 1, 0, text);
        this.editor.notify();
    }

    removeLine(lineNumber: number): void {
        this.lines.splice(lineNumber - 1, 1);
        this.editor.notify();
    }

    displayContent(): void {
        console.log('Conteúdo atual:');
        console.log(this.lines.join('\n'));
    }

    receiveInput(): void {
        console.log('Digite as linhas de texto. Digite EOF para finalizar.');
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on('line', (input: string) => {
            if (input.trim().toUpperCase() === 'EOF') {
                rl.close();
                this.editor.notify();
            } else {
                this.insertLine(this.lines.length + 1, input);
            }
        });
    }
}

function main(): void {
    const editor = new Editor();
    const textEditor = new TextEditor(editor);

    editor.attach(textEditor);
    editor.notify(); 
    textEditor.receiveInput();
}

main();
