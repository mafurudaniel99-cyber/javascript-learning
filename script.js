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