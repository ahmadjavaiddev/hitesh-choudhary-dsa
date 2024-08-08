class Stack {
    constructor() {
        this.stack = [];
    }

    add(data) {
        this.stack.push(data);
    }

    remove() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.stack[0];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    reverse() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.stack.reverse();
    }

    contains(value) {
        return this.stack.includes(value);
    }

    printStack() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + " ";
        }
        return str;
    }

    clear() {
        this.stack = [];
    }
}

const stack = new Stack();
stack.add(2);
stack.add(5);
stack.add(8);
stack.add(45);
stack.add(95);
console.log(stack.printStack());
stack.remove();
console.log(stack.printStack());
console.log(stack.contains(45));
stack.clear();
console.log(stack.printStack());
