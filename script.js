var css = document.querySelector("h3");
var bakCSS = document.getElementById("bak")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomizer");
var top = document.getElementById("top");
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
}

let processRandom = () => {
  color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

let randomColor = () => {
	return ("#"
	+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6));
}

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
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", processRandom);
top.addEventListener("click", setDirection);
bottom.addEventListener("click", setDirection);
right.addEventListener("click", setDirection);
left.addEventListener("click", setDirection);


setGradient();
