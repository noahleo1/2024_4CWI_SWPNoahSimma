function generate(){
    let num1 =document.getElementById("field1").value;
    let num2 = document.getElementById("field2").value;

    let amountOfRandomNum = parseInt(num2) - parseInt(num1);
    console.log(num1 + ":" + num2);
    console.log("clicked");
   let randomnum = Math.floor(Math.random() * amountOfRandomNum) + parseInt(num1);
   console.log("Die Generierte Zufallszahl zwischen den Werten:" + num1+" und "+num2+" ist: "+randomnum)
}