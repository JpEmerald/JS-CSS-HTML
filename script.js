const buttonFunction = document.querySelector('button');
const select = document.querySelector("select");
const html = document.querySelector("html");
const body = body.querySelector("body");

let myName;
let myAge;

buttonFunction.onclick = function() {
  let name = prompt('To continue using Jonny\'s site, please insert your name below:');
  alert('Hello ' + name + ', you\'re kinda cute');
}

function update(bgColor, textColor)
{
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  body.style.color = textColor;
  body.style.backgroundColor = bgColor;
}

select.onchange = function()
{
  if (select.value === "black")
  {
  update('black','white');
  } 
  else if (select.value ==="white")
  {
  update('white','black');
  }
  else if (select.value ==="HotMessOriginal")
  {
  update('pink','black');
  }
}
