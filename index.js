for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    drumaudioplay(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function() {
  drumaudioplay(event.key);
  buttonAnimation(event.key);
})

function drumaudioplay(vkey) {
  var vaudio;
  console.log("@drumsplay: " + vkey);
  switch (vkey) {
    case "w":
      vaudio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      vaudio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      vaudio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      vaudio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      vaudio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      vaudio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      vaudio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("invalid key press: " + vkey);
      vkey = "";
  }
  if (vkey != ""){
      // document.querySelector("." + vdrum).style.color = "white";
      vaudio.play();
      // document.querySelector("." + vdrum).style.color = "#DA0463";
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}
