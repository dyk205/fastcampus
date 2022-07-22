function Stack(array) {
    this.array = [];
    if(array) this.array = array;
}

Stack.prototype.push = function(value) {
    this.array.push(value);
}

Stack.prototype.pop = function() {
    return this.array.pop();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

Stack.prototype.peek = function() {
    return this.array[this.array.length-1];
}

function sortableStack(size) {
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();

    for(var i=0; i<this.size; i++) {
        this.mainStack.push(Math.floor(Math.random()*11));
    }
}

sortableStack.prototype.sortStackDescending = function() {
    while(!this.mainStack.isEmpty()) {
        var temp = this.mainStack.pop();
        while(!this.sortedStack.isEmpty() && this.sortedStack.peek()<temp) {
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
}

var ss = new sortableStack(10);
console.log(ss);
ss.sortStackDescending();
console.log(ss.sortedStack);