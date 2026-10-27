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

