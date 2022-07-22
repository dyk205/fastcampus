function Queue(array) {
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.enqueue = function(value) {
    return this.array.push(value);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

function QueueStack() {
    this.inbox = new Queue();
}

QueueStack.prototype.push = function(val) {
    this.inbox.enqueue(val);
}

QueueStack.prototype.pop = function() {
    var size = this.inbox.array.length - 1;
    var counter = 0;
    var bufferQueue = new Queue();

    while(++counter <= size) {
        bufferQueue.enqueue(this.inbox.dequeue());
    }
    var popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped;
}

var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());