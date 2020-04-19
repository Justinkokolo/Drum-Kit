/*DRUM CODE*/

//getting the number the loop have to run
var buttonAdd = document.querySelectorAll("button").length;

//adding the addEventListener to each button with the Loop
for (var i = 0; i < buttonAdd; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      var soundClick = this.innerHTML;
      makeSoundFunction(soundClick);
      addAnimation(soundClick);
  });
}

// callback functions
document.addEventListener("keydown", function(event){

    makeSoundFunction(event.key);

    addAnimation(event.key);
});


function makeSoundFunction(key) {

  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

     case "l":
        var audio7 = new Audio("sounds/snare.mp3");
        audio7.play();
        break;
    default:console.log(soudClick);

  }
}

function addAnimation(keyP){

  var keypressed = document.querySelector("."+keyP);

  keypressed.classList.add("pressed");

   setTimeout( function(){
  keypressed.classList.remove("pressed");},1000);
}
