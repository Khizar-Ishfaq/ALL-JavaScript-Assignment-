//......... Chapter 38-42 ..............
// ........ Task 1 .....................
// var a = prompt("Enter first value");
// var b = prompt("Enter scond value");
// var c;
// function power() {
//     c = Math.pow(a, b);
//     console.log(c);
// }
// power();

// ........ Task 2 .....................
// var a;
// function leap() {
//     var a = prompt("Enter year want to check ")
//     var b = a.slice(2.4);
//     parseInt(a);
//     if (b % 4 === 0){
//     alert ("this year is leap yaer");

// }else{
// alert("this year is not leap year");
// }
// }
// leap();



// ........ Task 3 .....................
// var a = prompt("enter the value of a")
// var b = prompt("enter the value of b")
// var c = prompt("enter the value of c")
// var s ;
// function sides (){
//     s =(+a + +b + +c)/2
// }
// function area(){
//     sides();
//     var area = (s*(s-a)*(s-b)*(s-c))
//     console.log(area);
// }
// area();

// ........ Task 4 .....................
// var totalmarks =300
// var sub1 = prompt ("Enter numbers in math subject ")
// var sub2 = prompt ("Enter numbers in eng subject ")
// var sub3 = prompt ("Enter numbers in stat subject ")

// function percentage(){
//     var par =((+sub1 + +sub2 + +sub3)/300)*100;
//     var p = Math.round(par);
//     console.log("Percentage = " + p + "%");
// }

// function average(){
//     var avg =(+sub1 + +sub2 + +sub3)/3
//     var a = Math.round(avg);
//     console.log("Average = " + a);
// }

// percentage();
// average();


// ........ Task 5 .....................
// var a = prompt("Enter a string")
// var b = prompt("Enter any character from given string")
// var c = 0;
// function index(){
//     for (var x = 0; x <= a.length; x++){
//         if (b  === a[x]){
//             c = 1;
//             alert(x);
//             break;
//         }
//     }
//     if (c === 0){
//         alert("Character not Found");
//     }
// }
// index();

// ........ Task 6 .....................


// ........ Task 7 .....................


// ........ Task 8 .....................
// var dist = prompt("enter the distance in kilometers");
// function meters(){
//     var m = +dist /1000;
//     console.log("Distance in meters =" + m);

// }
// function feet(){
//     var f = +dist *3280.84;
//     console.log("Distance in feet =" + f);
    
// }function inches(){
//     var inc = +dist *39370.1;
//     console.log("Distance in inches =" + inc);
    
// }function centimeters(){
//     var c = +dist * 100;
//     console.log("Distance in centimeters =" + c);
    
// }
// meters();
// feet();
// inches();
// centimeters();



// ........ Task 9 .....................
// var a = prompt("enter total warking hars")
// var result;
// function overTimecCal(){
//     result =(a-40)*12
//     console.log(result);
// }
// if (a > 40){
//     overTimecCal();
// }
// else {
//     alert("no overTime")
// }


// ........ Task 10.....................
// var a = prompt("Enter amount in 3 digits");
// var b;
// function notes(){
// if  (a [1] > 5){
//     b = a [1]-5;
//     console.log("you will have " + a[0]+" hunder notes 1 fifty note " + b + " ten notes");
//     }
//     else if (a[1] <= 5){
//         console.log("you will have " + a[0]+" hunder notes 0 fifty note " + a[1] + " ten notes")
//     }
// }

// notes();


// ........ Chapter Num.43-48 .....................
// ........ Task 1 .....................
// function clickLnk(){
//     alert("You clicked a link");
// }

// ........ Task 2.....................

function Messages(){
    alert ("Thanks for purchasing a phone for us");
}



// ........ Task 3.....................
// function del_(id_){
//     var khizar = document.getElementById (id_)
//     khizar.remove();
// }
// ........ Task 4.....................
//  function changeImage(){
//     var phoneImage = document.getElementById('img');
//     phoneImage.src = 'img3/pho1.jpeg';
// }
// function changeImageBefore(){
//     var phoneimg = document.getElementById('img');
//     phoneimg.src = 'img3/pho.jpeg';
// }


// ........ Task 5.....................
// var counter = 0;
// var a = document.getElementById("counter")
// function increase(){
//     ++counter
//     a.innerHTML = counter;
// }

// function Decrease(){
//     --counter
//     a.innerHTML = counter;
//  }
