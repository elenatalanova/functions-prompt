/*const age = prompt("How old are you?");
const name = prompt("What is your name?");
const food = prompt("What is your favorite food?");
undefined
prompt("What is your favorite food?");
"rise"
prompt("What is your name?");
"Elena"
function sentence(userAge, useName, userFood) {
    
VM8441:2 Uncaught SyntaxError: Unexpected end of input
function sentence(userAge, useName, userFood) {
  return "Welcome dear" + name + ". I know that you are" + age + "years old. Your favorite food is" + food + ".";
}
undefined
alert("sentence");
undefined
alert(sentence);
undefined
alert (sentence ());
undefined
alert (sentence ());
undefined
alert (sentence (age, name, food));
undefined*/


const age = prompt("How old are you?");
const name = prompt("What is your name?");
const food = prompt("What is your favorite food?");

function sentence(userAge, useName, userFood) {
  return "Welcome dear " + name + ". I know that you are " + age + " years old. Your favorite food is " + food + ".";
}

alert (sentence (age, name, food));