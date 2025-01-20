// Mehtods : Actions that can be performed on an object

const calculator = {
    num:55,   // property
    add: function(a,b) {   // function
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    },
    div: function(a,b) {
        return a/b;
    }
}

console.log(calculator)
console.log(calculator.add)
console.log(calculator.add(2,3))