var css = document.querySelector("h3");
var bakCSS = document.getElementById("bak");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomizer");
var topButton = document.getElementById("top");
var bottom = document.getElementById("bottom");
var right = document.getElementById("right");
var left = document.getElementById("left");
var dir = "to right, ";// initial value.

let setGradient = () => {
	var backgroundCSS="linear-gradient("
	  +dir
  	+ color1.value
  	+ ", "
  	+ color2.value
  	+ ")";

	  body.style.background = "linear-gradient("
	  +dir
  	+ color1.value
  	+ ", "
  	+ color2.value
  	+ ")";
  	css.textContent = backgroundCSS;
		bakCSS.textContent = '<body style="background: '+ backgroundCSS + ';">';
		randomButton.style.background = "linear-gradient("+dir+ color1.value+ ", "+ color2.value+ ")";
  dirBackgrounds();
};

let dirBackgrounds = () => {
  butBack = "to bottom, ";
  bottom.style.background = "linear-gradient("+butBack+ color1.value+ ", "+ color2.value+ ")";
  butBack = "to top, ";
  topButton.style.background = "linear-gradient("+butBack+ color1.value+ ", "+ color2.value+ ")";
  butBack = "to right, ";
  right.style.background = "linear-gradient("+butBack+ color1.value+ ", "+ color2.value+ ")";
  butBack = "to left, ";
  left.style.background = "linear-gradient("+butBack+ color1.value+ ", "+ color2.value+ ")";
};
let processRandom = () => {
  color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
};


let randomColor = () => {
  let hexes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomColor = "#";
  do
  {
    let hex = Math.floor(Math.random() * 16);
    randomColor = randomColor.concat(hexes[hex]);
  } while (randomColor.length < 7);
  return randomColor;
};

let setDirection = (event) => {
	if (event.target.name==="direction"){
		if( event.target.id == "top" ){
			dir = "to top, ";
		} else if ( event.target.id == "right" ){
			dir = "to right, ";
		}else if ( event.target.id == "left" ){
			dir = "to left, ";
		}else if ( event.target.id == "bottom" ){
			dir = "to bottom, ";
		}
		setGradient();
	}
};
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", processRandom);
topButton.addEventListener("click", setDirection);
bottom.addEventListener("click", setDirection);
right.addEventListener("click", setDirection);
left.addEventListener("click", setDirection);

processRandom();
setGradient();
