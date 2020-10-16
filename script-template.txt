var start = new Date().getTime();
var bestTime = 100;

/* START AND END BUTTON FUNCTIONALITY */







function getRandomColour() {
    /* ADDING COLORS USING MATH.RANDOM() */
    


    return color;
}
function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 1200;
    var width = (Math.random() * 400) + 100;
    /* ADDING CIRCLE OR SQUARE USING MATH.RANDOM() AND PROBABILITY */
    

    /* ADDING BACKGROUND COLOR TO SHAPES */
    

    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}
function appearAfterDelay() {
    /* HOW TO MAKE SHAPE APPEAR AFTER DELAY */
    

}
appearAfterDelay();
document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();

    /* CALCULATING TIME TAKEN */


    /* CALCULATING BEST TIME */


    /* UPDATING THE TIME TAKEN AND BEST TIME IN OUR PAGE */

    

    
    appearAfterDelay();
}



