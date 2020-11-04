const buttonFunction = document.querySelector('button');
let myName;
let myAge;

buttonFunction.onclick = function() {
  let name = prompt('To continue using Jonny\'s site, please insert your name below:');
  alert('Hello ' + name + ', you\'re kinda cute');
}
