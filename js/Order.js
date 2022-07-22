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

function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = new Queue;
}

Cashier.prototype.addOrder = function(customer) {
    this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = function() {
    var finishedCustomer = this.customers.dequeue();
    console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
}

var cashier = new Cashier();
var customer1 = new Customer('Jim',"Fries");
var customer2 = new Customer('Sammie',"Burger");
var customer3 = new Customer('Peter',"Drink");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();