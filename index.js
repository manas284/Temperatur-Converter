const heading = document.getElementById("heading");
const input = document.getElementById("input");
const mybutton = document.getElementById("mybutton");
const tofaren = document.getElementById("tofaren");
const tocelsis = document.getElementById("tocelsis");
const display = document.getElementById("display");
let temp;

mybutton.onclick = function(){
  if(tofaren.checked){
    temp = Number(input.value);
    temp = temp*9/5 +32;
    display.textContent = temp;
  }
  else if(tocelsis.checked){
    temp = Number(input.value);
    temp = (temp-32)*5/9;
    display.textContent = temp;
  
  }else{
    display.textContent = `chuse kar le`;
  }
}