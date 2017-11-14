var openTheBox = document.querySelector("#button")
var topTopBox = document.querySelector(".topOutside")
var topDownBox = document.querySelector(".topInside")
var ghosts = document.querySelectorAll(".ghosts")
var rotation = document.querySelector(".carousel")
var music = document.querySelector("#audioPlayer")
var drawer = document.querySelector(".drawer")
var eye = document.querySelectorAll(".eye")

openTheBox.addEventListener("click", function() {
  topTopBox.classList.toggle("opened")
  topTopBox.classList.toggle("closed")
  musicPlayer();
  topDownBox.classList.toggle("opened")
  topDownBox.classList.toggle("closed")
  rotation.classList.toggle("is-active")
  for(i=0 ; i<ghosts.length ; i++) {
    ghosts[i].classList.toggle("is-active")
  }
},
false)

function musicPlayer() {
    if (topTopBox.classList.contains("opened")) {
        music.play()
    } else {
        music.pause();	
    }
}

for (i=0 ; i< eye.length ; i++) {
  eye[i].addEventListener("mouseover", function() {
  var values="123456789ABCDEF"
  var color="#"
  for(var j=0 ; j<6 ; j++) {
    var random =Math.floor(Math.random()*values.length)
    color += values.charAt(random)
  }  
  eye[i].style.backgroundColor = color
},
false)
}