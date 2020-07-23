// =========== Chapter# 21-25 =========
// =========== Task 1 =========
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName + lName;
// alert("Welcome dear " + fullName);


// =========== Task 2 =========
// var cellName = prompt("Enter your favorite mobile name: ");
// var len = cellName.length;
// document.write("My favorite phone is: " + cellName + "<br>");
// document.write("Length of string: " + len);


// =========== Task 3 =========
// var name = "Pakistani";
// var n = name.indexOf("n");
// document.write("String: " + name + "<br>");
// document.write("Index of 'n': " + n);


// =========== Task 4 =========
// var name = "Hello World";
// var n = name.lastIndexOf("l");
// document.write("String: " + name + "<br>");
// document.write("Last Index of 'l': " + n);


// =========== Task 5 =========
// var name = "Pakistani";
// var n = name.charAt("3");
// document.write("String: " + name + "<br>");
// document.write("Character at index '3' is: " + n);

// =========== Task 6 =========
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName.concat(fName);
// alert("Welcome dear " + fullName);

// =========== Task 7 =========
// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + res);

// =========== Task 8 =========
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + res);

// =========== Task 9 =========
// var numS = "472";
// document.write("Value: " + numS + "<br>");
// document.write("Type: " + typeof(numS) + "<br>");
// var numN = Number("472");
// document.write("Value: " + numN + "<br>");
// document.write("Type: " + typeof(numN) + "<br>");


// =========== Task 10 =========
// var str = prompt("Enter a string");
// document.write("User input: " + str + "<br>");
// var upperCase = str.toUpperCase();
// document.write("Upper case: " + upperCase + "<br>");

// =========== Task 11 =========
// var str = prompt("Enter a string");
// document.write("User input: " + str + "<br>");
// var firstChar = str.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = str.slice(1);
// otherChar =  otherChar.toLowerCase();
// var str = firstChar.concat(otherChar);
// document.write("Title case: " + str + "<br>");


// =========== Task 12 =========
// var num = "35.36";
// var num1 = num.slice(0,2);
// var num2 = num.slice(3,5);
// var num4 = num1.concat(num2);
// var number = Number(num4);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + number + "<br>");


// =========== Task 13 =========
// var txt = prompt("Enter your name: ");
// var n;
// for( var i=0; i <= txt.length; i++){
//     n = txt[i].charCodeAt(txt[i]);
//     if(n === 33 || n === 44 || n === 46 || n === 64 ){
//     alert("Please enter a valid user name");
//     }
// }


// =========== Task 14 =========
// var item = prompt("Welcome to our bakery! What do you want to odrer Sir/Ma'am: ");
// var iName = item.toLowerCase();
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === iName){
//         alert(iName + " is found " + " at index " + arr.indexOf(iName));
//     }else {
//         alert(iName + " is not available");    
//     }
// }


// =========== Task 15 =========
// var pass = prompt("Enter your password here! ");
// if (pass.length != 6){
//     alert("Enter correct password. ");
// }else{
//     for (var i = 0; i < pass.length; i++){

//     }
// }


// =========== Task 16 =========
// var uni = "University of Karachi";
// var res = uni.split("");
// document.write(res);


// =========== Task 17 =========
// var str = prompt("Enter any string: ");
// var chr = str.charAt(str.length-1);
// document.write("User Input: " + str + "<br>");
// document.write("Last character of input: " + chr);


// =========== Task 18 =========





// =========== Chapter# 26-30 =========
// =========== Task 1 =========
// var num = prompt("Enter any number: ");
// document.write("number: " + num + "<br>");
// document.write("round off vale: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");


// =========== Task 2 =========
// var num = prompt("Enter any negaive float number: ");
// document.write("number: " + num + "<br>");
// document.write("round off vale: " + Math.round(num) + "<br>");
// document.write("floor value: " + Math.floor(num) + "<br>");
// document.write("ceil value: " + Math.ceil(num) + "<br>");


// =========== Task 3 =========
// var num = prompt("Enter any number: ");
// var numAbs = Math.abs(num);
// document.write("The absoulute value of : " + num + " is " + numAbs + "<br>");


// =========== Task 4 =========
// var num = Math.ceil(Math.random() * 6);
// document.write("Random dice value" + num);


// =========== Task 5 =========
// var num = Math.ceil(Math.random() * 2);
// if (num === 1){
//     document.write(num + "<br>Random coin value = Tails");
// }else {
//     document.write(num + "<br>Random coin value = Head");
// }


// =========== Task 6 =========
// var num = Math.ceil(Math.random() * 100);
// document.write("Random numberr between 1 and 100: " + num);


// =========== Task 7 =========
// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is: " + parseInt(weight) + " Kilograms");


// =========== Task 8 =========
// var num = prompt("Enter any number from 1 to 10: ");
// var ramNum = Math.ceil(Math.random() * 10);
// document.write(ramNum);
// if (num == ramNum){
//     alert("Congratulations!!!");
// }else{
//     alert("Try again!")
// }





// =========== Chapter# 31-34 =========
// =========== Task 1 =========
// var now = new Date();
// document.write(now);


// =========== Task 2 =========
// var now = new Date();
// var crntMnth = now.getMonth();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December'];
// document.write("Current Month: " + months[crntMnth]);


// =========== Task 3 =========
// var now = new Date();
// var crntDay = now.getDay();
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// document.write("Today is: " + days[crntDay]);


// =========== Task 4 =========
// var now = new Date();
// var crntDay = now.getDay();
// if(crntDay === 0 || crntDay === 6){
//     document.write("Its Fun Day");
// }


// =========== Task 5 =========
//  var now = new Date();
//  var crntDate = now.getDate();
//  if (crntDate < 16){
//      document.write("First fifteen days of tha month");
//  }else {
//     document.write("Last fifteen days of tha month");
//  }


// =========== Task 6 =========
// var now = new Date();
// var millSec = now.getTime();
// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millSec + "<br>");
// var mins = millSec/(1000*60*60);
// document.write("Elapsed minutes since January 1, 1970: " + mins + "<br>");


// =========== Task 7 =========
//  var now = new Date();
//  var crntHours = now.getHours();
//  if (crntHours < 12){
//      document.write("Its A.M");
//  }else {
//     document.write("Its P.M");
//  }


// =========== Task 8 =========
// var lastDate = new Date("December 31, 2020");
// document.write("Later Date: " + lastDate);


// =========== Task 9 =========
// var previous = new Date("June 18, 2015");
// var now = new Date();
// var millSec1 = now.getTime();
// var millSec2 = previous.getTime();
// var rDays = millSec1 - millSec2;
// var days = rDays/(1000*60*60*24);
// document.write(days + " Days have passed since 1st Ramzan.");


// =========== Task 10 =========
// var refDate = new Date("December 05, 2015");
// var now = new Date("January 01, 2015");
// var millSec1 = now.getTime();
// var millSec2 = refDate.getTime();
// var rSec = millSec2 - millSec1;
// var sec = rSec/(1000*60);
// document.write("On reference date " + refDate + ", " + sec + " Seconds have passed since begning of 2015.");


// =========== Task 11 =========
// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// var hrs = now.getHours();
// var diff = hrs - 1;
// document.write(diff);


// =========== Task 12 =========





// =========== Task 13 =========




// =========== Task 14 =========
// var now = new Date();
// document.write("<b>K-Electric Bill</b> <br><br>");
// document.write("Customer Name: <b>ABC Customer</b> <br>");
// var crntMnth = now.getMonth();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December'];
// document.write("Current Month: <b>" + months[crntMnth] + "</b> <br>");
// document.write("Number of Units: <b>410</b> <br>");
// document.write("Charges Per Unit: <b>16</b> <br><br><br>");
// var units = 410;
// var charges = 16;
// var costdd = units*charges;
// document.write("Net amount payable (with due date): <b>" + costdd + "</b> <br>");
// var lPayment = 350;
// document.write("Late Payment surcharge: <b>" + lPayment + "</b> <br>");
// var costad = costdd + lPayment;
// document.write("Gross payable amount (after due date): <b>" + costad + "</b> <br>");





// =========== Chapter# 35-38 =========
// =========== Task 1 =========
// function date (){
//     var now = new Date();
//     document.write("Current Date: " + now);
// }
// date();


// =========== Task 2 =========
// function name(){
//     var fname = prompt("Enter your full name: ");
//     var lname = prompt("Enter your last name: ");
//     alert("Welcome " + fname.concat(lname) + " to our site");
// }
// name();


// =========== Task 3 =========
// function sum (){
//     var fnum = prompt("Enter first value: ");
//     var snum = prompt("Enter second value: ");
//     var sum = +fnum + +snum;
//     document.write("Sum = " + sum);
// }
// sum();


// =========== Task 4 =========
// function calculator() {
//     var num1 = prompt("Enter First Number: ");
//     var num2 = prompt("Enter Second Number: ");
//     var operator = prompt("Enter Any Operator: ");
//     if (operator === '+') {
//         var sum = +num1 + +num2;
//         alert("Sum = " + sum);
//     } else {
//         if (operator === '-') {
//             var sub = +num1 - +num2;
//             alert("Subtraction = " + sub);
//         } else {
//             if (operator === '*') {
//                 var mul = +num1 * +num2;
//                 alert("Multiplication = " + mul);
//             } else {
//                 if (operator === '/') {
//                     var devide = +num1 / +num2;
//                     alert("Division = " + devide);
//                 }
//             }
//         }
//     }
// }
// calculator();



// =========== Task 5 =========
// function square (){
//     var num = prompt("Enter Any Number to Calculate Square: ");
//     var sqr = +num * +num;
//     document.write("Square of Number is: " + sqr);
// }
// square();


// =========== Task 6 =========
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);



// =========== Task 7 =========
// function counting (){
//     var fnum = prompt("Enter First Number: ");
//     var lnum = prompt("Enter Second Number: ");
//     for (i = fnum; i<=lnum; i++){
//         document.write(i + "<br>");
//     }
// }
// counting();


// =========== Task 8 =========
// function hyp(){
//     function sqrs(){
//         var base = prompt("Enter the Value of Base: ");
//         var perp = prompt("Enter the Value of Perpendicular: ");
//         var baseSqr = +base * +base;
//         var perpSqr = +perp * +perp;
//         var hyp = +baseSqr * +perpSqr;
//         var hypSqr = +hyp + +hyp;
//     }
//     var hyp = +baseSqr * +perpSqr;
//     var hypSqr = +hyp + +hyp;
//     document.write("Hypotenuse" + hypSqr);
// }
// sqrs();
// hyp ();


// =========== Task 9 =========
