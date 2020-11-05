const buttonFunction = document.querySelector('button');
const select = document.querySelector("select");
const html = document.querySelector("html");
const body = document.querySelector("body");
const returnButton = document.querySelector(".return");

let myName;
let myAge;

returnButton.addEventListener("click",function()
{
  setTimeout( () => {location.replace("index.html");}, 300);
})


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
