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

function isParenthesisValid(validationString) {
    var stack = new Stack();
    for(var pos=0; pos<validationString.length; pos++) {
        var currentChar = validationString.charAt(pos);
        if(currentChar == "(") {
            stack.push(currentChar);
        } else if(currentChar == ")") {

            if(stack.isEmpty())
                return false;
            
            stack.pop();
        }
    }
    return stack.isEmpty();
}

console.log(isParenthesisValid("((()"));
console.log(isParenthesisValid("(((("));
console.log(isParenthesisValid("()()"));