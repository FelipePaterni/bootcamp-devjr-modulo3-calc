function calc(char){
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var output;
switch (char) {
    case '+':
        output = num1 + num2;
        break;
    case '-':
        output = num1 - num2;
        break;
    case '*':
        output = num1 * num2;
        break;
    case '/':
        output = num1 / num2 ;
        break;
    
}
  

  document.getElementById("output").value = output;
}