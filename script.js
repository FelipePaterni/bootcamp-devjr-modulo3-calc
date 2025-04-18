function calc(){
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);

   var output = num1+num2;

  document.getElementById("output").value = output;
}