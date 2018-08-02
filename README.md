# Gradient-Background
Genrate gradient backgrounds

An exercise from zero to mastery course from Andrie

This exercise is about input type="color" and linear-gradient().

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#HTML

https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Formal_syntax


<input> elements of type "color" provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in "#rrggbb" hexadecimal format. Only simple colors (with no alpha channel) are allowed

linear-gradient( 
  [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )
  \---------------------------------/ \----------------------------/
    Definition of the gradient line        List of color stops  

where <side-or-corner> = [left | right] || [top | bottom]
  and <color-stop>     = <color> [ <percentage> | <length> ]?

  ideas?
  -Add an angle picker 
  -Add a directional picker
  -Add a color percentage?


  In order to select the css code needed for the background all the user needs to do is click anywhere on the element and it is wholly selected.

  The randomize button does its namesake.
