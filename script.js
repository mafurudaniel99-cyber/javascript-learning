//all js code her

        //javascript valiable (constant) declalation
        const firstStatement = document.getElementById('firstStatement');
        //you can make a HTML  element to be variable  and start changing its properties as you want
        //changing the color and font size of the first statement
        firstStatement.style.color = 'blue';
        firstStatement.style.fontSize = '24px';

       // changing the text content of the first statement
       firstStatement.textContent = "This is the first statement in a script";

    //javascript string
doocument.getElementById("myFirstStriing").innerHTML = "This is my first string in javascript";

//javascript string methods
let myString = "Hello, welcome to the world of JavaScript!";
 
//string length
let stringLength = myString.length;
//string to uppercase
let upperCaseString = myString.toUpperCase();

//js Number Methods
let myNumber = 123.456;
myNumber = myNumber.toFixed(2); // rounds to 2 decimal places
document.getElementById("jsNumberMethods").innerHTML = "Rounded Number: " + myNumber;

 let myNumber2 = 123.456;
 myNumber2 = myNumber2.toPrecision(4); // formats to 4 significant digits
 document.getElementById("jsNumberMethods2").innerHTML += "<br>Formatted Number: " + myNumber2;

//js functions
function add(){
    let a =2;
    let b =3;
    let c = a + b;
    return c;
}

//function expression a function stored in a variable
//is the js statement so it must end with semicolons and they can not be called before they are defined.
 const substruct = function(a,b){return a-b;};
  //after a functionn expression stored in a variable now you can use that variable as a function

  substruct(5,3); //returns 2


//arrow function
const multiply = (x, y) => x * y;

// javascrript timers

//are used to run a functtion after a delay or at a regular iinterval. there are two main types of timers in js these are  setTimeout and setInterval

//setTimeout runs a function after some delay in milliseconds.
//setInterval runs a function repeatedly at a specified interval in milliseconds.

//clearInterval stops an interval
//clearTimeout stops a timeout function from running if it has not executed yet.

//setTimeout syntax
//setTimeout(function, milliseconds);
setTimeout(() => {
    document.getElementById("timer").innerHTML = "This message is displayed after 3 seconds";
}, 3000);

//setInterval syntax    
//setInterval(function, milliseconds);
let count = 0;
const interval = setInterval(() => {
    count++;
    document.getElementById("timer").innerHTML = `This message is displayed every 2 seconds. Count: ${count}`;
}, 2000);   
 //A zero delay does not mean that the JS will execute immediately.it means that the function will be executed after the currennt execution context is complited.
  let v =1;
  const  zeroDelay = setTimeout(() =>{
    v++;
    document.getElementById("timer").innerText = `Zero delay message. Value: ${v}`;
  }, 0);



  //js variables are the containers or variable s that thy can store the values and functions and objects and other data types. they are used to store data in a program and can be changed or updated as needed. they are declared using the var, let, or const keywords. var is function-scoped, let is block-scoped, and const is also block-scoped but cannot be reassigned after its initial assignment.

  //object
  const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
   
  // objectName.property
      let seemodel = car.model; //returns  "500"
// object functions(methods)
      const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//object this keyword
//The this keyword refers to the current object that the code is being executed in. it can be used to access properties and methods of the current object. in a method, this refers to the object that the method is a property of. in a function, this refers to the global object (window in browsers) unless the function is called as a method of an object.
const person2 ={
    firstName: "Daniel",
    lastname: "Mafuru",
    fullName: function(){
        //this refers to the current object person2
        return this.firstName + " " + this.lastname;; 
    }
}

//now how to display javascript objects?
// Create an Object
const people = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = people.name + "," + people.age + "," + people.city;

//constructors
// are used to create a new object with the same properties and methods as an existing object. they are defined using a function and are called using tthe new keyword. 
//they can also be used to create multiple instances of an object with different values for the properties. they are a way to create objects that share the same structure and behavior.
function Animal(region,type,sound){
  this.region = region;
  this.type = type;
  this.sound = sound;
}

//now the similar objects can be created by using the constructor above
const dog = new Animal("africa","dog","woof");
const cat = new Animal("europe","cat","meow");
const cow = new Animal("asia","cow","moo");