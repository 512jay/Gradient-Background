var css = document.querySelector("h3");
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
	body.style.background = "linear-gradient("
	  +dir//+"to right, "
  	+ color1.value
  	+ ", "
  	+ color2.value
  	+ ")";

  	css.textContent = body.style.background;
  	console.log("instance ran");
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
	console.log(event);
	console.log(event.srcElement.type);
	if (event.srcElement.type==="radio"){
		console.log("Time to change directions on ",event.srcElement.id);
		if( event.srcElement.id == "top" ){
			dir = "to top, ";
		} else if ( event.srcElement.id == "right" ){
			dir = "to right, ";
		}else if ( event.srcElement.id == "left" ){
			dir = "to left, ";
		}else if ( event.srcElement.id == "bottom" ){
			dir = "to bottom, ";
		}
		setGradient();
	}
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", processRandom);
top.addEventListener("input", setDirection);
bottom.addEventListener("input", setGradient);
right.addEventListener("input", setGradient);
left.addEventListener("input", setGradient);


setGradient();
