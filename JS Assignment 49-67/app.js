// ............Task 1 .........
function submit(){
    var val1 = document.getElementById("val1");
    var p1 = document.createElement("p");
    var textNode1 = document.createTextNode(val1.value);
    p1.appendChild(textNode1);
    var submit = document.getElementById("submited");
    submit.appendChild(p1);
    
    var val2 = document.getElementById("val2");
    var p2 = document.createElement("p");
    var textNode2 = document.createTextNode(val2.value);
    p2.appendChild(textNode2);
    var submit2 = document.getElementById("submited");
    submit2.appendChild(p2);

    var val3 = document.getElementById("val3");
    var p3 = document.createElement("p");
    var textNode3 = document.createTextNode(val3.value);
    p3.appendChild(textNode3);
    var submit2 = document.getElementById("submited");
    submit2.appendChild(p3);

    val1.value = '';
    val2.value = '';
    val3.value = '';
}


// ............Task 2 .........

// function readmore(){
   
//     var pera ="Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on button, full detail of that particular item will be displayed.";
//     var peragraf = document.getElementById("pera");
//     peragraf.innerHTML = pera;
// }