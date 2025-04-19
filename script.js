function calc(char) {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var output;
  switch (char) {
    case "+":
      output = num1 + num2;
      break;
    case "-":
      output = num1 - num2;
      break;
    case "*":
      output = num1 * num2;
      break;
    case "/":
      output = num1 / num2;
      break;
  }
  document.getElementById("output").value = output;

  var newHistory =  "<p>" + num1 + " " + char + " " + num2 + " = " + output + "</p>";
 
  var history = document.getElementById("history");
history.innerHTML = newHistory + history.innerHTML;

  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10]);
  }
}
