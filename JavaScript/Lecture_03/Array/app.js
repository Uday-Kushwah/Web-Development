//Array creation
let students = ["aman","payal","raman"];
console.log(students)
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students.length);
console.log(typeof students);

//empty array
let arr = [];

students[1] = "Kajal";
console.log(students)

students[10] = "Ram";
console.log(students) 
//Output : 
  /*   "aman",
    "Kajal",
    "raman",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Ram" */
console.log(students.length)


//Arrays method :
// 1. Push : add to end.
let cars = ["maruti","bmw","audi","nexon"]
cars.push("toyota")
console.log(cars)

//2. Unshift : add to start
cars.unshift("ferari")
console.log(cars)


//3. Pop : delete from end & returns it
cars.pop()
console.log(cars)

//4. shift :  delete from start & returns it
cars.shift()
console.log(cars)

//indexOf : returns index of something
console.log(cars)
console.log(cars.indexOf("bmw"))   //1
console.log(cars.indexOf("green"))  //-1

//includes : search for a value
console.log(cars.includes("bmw"))   //true
console.log(cars.includes('red')) // false

//concat : merge 2 arrays
let primary = ["red","green","yellow"]
let secondary = ["orange","green","sky blue"]
console.log(primary.concat(secondary))

//Reverse : reverse an array
console.log(primary.reverse())

//slice in array : copies a portion of array
let colors = ["red","green","yellow","orange","violet","sky blue"]
console.log(colors.slice())  //to make copy
console.log(colors.slice(2)) 
console.log(colors.slice(2,3)) 
console.log(colors.slice(-3)) 

 
//splice : removes | replaces | add elements in place 
// splice(start, deleteCount, item0.....itemN)
console.log(colors.splice(4))
console.log(colors)

console.log(colors.splice(0,1))

