function buttonClicked(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    console.log(num1);
    let result = parseFloat(num1) + parseFloat(num2);

    console.log(result);
}
function button1Clicked(){
    console.log("clicked 1");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    console.log(num1);
    let result = parseFloat(num1) - parseFloat(num2);

    console.log(result);
}
function button2Clicked(){
    console.log("clicked 2");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    console.log(num1);
    let result = parseFloat(num1) * parseFloat(num2);

    console.log(result);
}
function button3Clicked(){
    console.log("clicked 3");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    console.log(num1);
    let result = parseFloat(num1) / parseFloat(num2);

    console.log(result);
}