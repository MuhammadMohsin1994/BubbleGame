let lvl1 = 30;
const red = "#ff3204";
const orange = "#ea8f0c";
const yellow = "#eaea0c";
const pink = "#d90cea";
const green = "#98ec67";
const popupballon = () => {
   let parent = document.getElementById("Baloon");
   let count = parent.childElementCount;
   let score = 0;
   for (let i = 0; i < count; i++) {
      let c = parent.getElementsByTagName("div")[i].style.backgroundColor;
      chkcolor="";
       chkcolor=parent.getElementsByTagName("div")[i];

      if (c === Taskcolor) {
         score += 1;
         document.getElementById("score").innerText = `Score: ${score}`
         console.log(score);
         parent.getElementsByTagName('div')[i].removeChild;
         break;
      }
   }
}
let Taskcolor;
const popuptask = () => {
   let pop = popballon(1, 5)
   if (pop == 1) {
      document.getElementById("Task").innerHTML = "Popup Red Ballons";
      Taskcolor = "rgb(255,50,40)";
   }
   else if (pop == 2) {
      document.getElementById("Task").innerHTML = "Popup Orange Ballons";
      Taskcolor = "rgb(234,143,12)";
   }
   else if (pop == 3) {
      document.getElementById("Task").innerHTML = "Popup Yellow Ballons";
      Taskcolor = "rgb(234,234,12)";
   }
   else if (pop == 4) {
      document.getElementById("Task").innerHTML = "Popup Pink Ballons";
      Taskcolor = "rgb(217, 12, 234)";
   }
   else if (pop == 5) {
      document.getElementById("Task").innerHTML = "Popup Green Ballons";
      Taskcolor = "rgb(152, 236, 103)";
   }
}
let start = 0;
const Gamestart = () => {
   start = 1;
}
const randomfunc = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
const popballon = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
const addballon = (colors) => {

   let Baloon = document.getElementById("Baloon");
   let baloonadd;
   let clr = colors;
   baloonadd = document.createElement("div");
   Baloon.appendChild(baloonadd);
   baloonadd.className = "bln";
   baloonadd.style.margin = '2%';
   baloonadd.style.backgroundColor = clr;
}
const baloonadd = () => {
   document.getElementById("btnstart").disabled = 'true';
   for (let i = 0; i < lvl1; i++) {
      let randomcolor = randomfunc(1, 5);
      if (randomcolor == 1) {
         addballon(red)
      }
      else if (randomcolor == 2) {
         addballon(orange)
      }
      else if (randomcolor == 3) {
         addballon(yellow)
      }
      else if (randomcolor == 4) {
         addballon(pink)
      }
      else if (randomcolor == 5) {
         addballon(green)
      }
   }
}
const closed=()=>
{
   window.location.replace('./index.html')
}