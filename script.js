var start = new Date().getTime();
var bestTime = 100;

var start = document.getElementById("start");
start.addEventListener('click', function() {
    toggleClasses(document.getElementById('start-screen'),'hide', 'show');
    toggleClasses(document.getElementById('game-screen'), 'hide','show');
    var user = document.getElementById("user").value
    console.log(user)
    document.getElementById("name").innerHTML = `${user}'s`
});


function toggleClasses(element) {
    for (var i = 1; i < arguments.length; i++) {
      element.classList.toggle(arguments[i]);
    }
}


function getRandomColour() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 1200;
    var width = (Math.random() * 400) + 100;
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    document.getElementById("shape").style.backgroundColor = getRandomColour();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
    
}
function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();
document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    if (timeTaken < bestTime) {
        bestTime = timeTaken;
    }
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    document.getElementById("bestTime").innerHTML = bestTime + "s";
    appearAfterDelay();
}



