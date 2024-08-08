class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    printQueue() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + " ";
        }

        return str;
    }

    clear() {
        this.queue = [];
    }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue("A");
queue.enqueue(8);
queue.enqueue("F");
queue.enqueue("P");
queue.enqueue(10);

console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());
queue.enqueue(55);
console.log(queue.printQueue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
const value = queue.dequeue();
console.log("value ::", value);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.printQueue());
