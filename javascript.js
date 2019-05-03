/* about me */


var opacity = 0;

function aboutFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      aboutFadeUp()
    }, 10);
  }
  document.getElementById("about-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("about-overlay").style.display = "flex";
  document.getElementById("about-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('about-overlay').style.overflowY = "scroll";
  }
}

function aboutFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      aboutFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("about-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("about-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('about-overlay').style.overflowY = "hidden";
}



/* --------------------------------------------------- */

/* Speak & Spell */

function speakFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      speakFadeUp()
    }, 10);
  }
  document.getElementById("speak-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("speak-overlay").style.display = "flex";
  document.getElementById("speak-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('speak-overlay').style.overflowY = "scroll";
  }
}

function speakFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      speakFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("speak-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("speak-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('speak-overlay').style.overflowY = "hidden";
}

/* --------------------------------------------------- */

/* Music */

function musicFadeUp() {
  if (opacity < 100) {
    opacity += 8;
    setTimeout(function() {
      musicFadeUp()
    }, 10);
  }
  document.getElementById("music-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.display = "block";
  document.getElementById("music-overlay").style.display = "flex";
  document.getElementById("music-overlay").scrollTop = 0;
  
  if (opacity >= 100) {
    document.getElementById("no-scroll").style.overflow = "hidden";
    document.getElementById('music-overlay').style.overflowY = "scroll";
  }
}

function musicFadeDown() {
  if (opacity > 0) {
    opacity -= 8;
    setTimeout(function() {
      musicFadeDown()
    }, 10);
  }
  if (opacity <= 0) {
    document.getElementById("music-overlay").style.display = "none";
    document.getElementById("background-image-overlay").style.display = "none";
    
  }
  console.log(opacity)
  document.getElementById("music-overlay").style.opacity = opacity/100;
  document.getElementById("background-image-overlay").style.opacity = opacity/100;
  document.getElementById("no-scroll").style.overflowY = "scroll";
  document.getElementById('music-overlay').style.overflowY = "hidden";
}



/*-------IMAGE CAROUSEL START -------*/

var position = -100;
let intervalID;


function left() {
  
  if (document.getElementById("carousel-hidden").checked === true) {
      document.getElementById("carousel-hidden").checked = false;
      clearInterval(intervalID);
    };
  
  position += 2;
  var images = document.getElementById("carousel-images");
  var time = setInterval(move, 8);
  console.log(position);

  function move() {
    if (position % 100 == 0) {
      console.log(position);
      clearInterval(time);
    } else {
      position += 2;
      images.style.left = position + "%";
      if (position == 0) {
         position = -500;
         images.style.left = -500;
      }
    }
  }
}


function right() {
    var time = setInterval(move, 8);
  
    if (document.getElementById("carousel-hidden").checked === true) {
      document.getElementById("carousel-hidden").checked = false;
      clearInterval(intervalID);
    };
  
  position -= 2;
  var images = document.getElementById("carousel-images");
  
  console.log(position);
  
  function move() {
    if (position % 100 == 0) {
      console.log(position);
      clearInterval(time);
    } else {
      position -= 2;
      images.style.left = position + "%";
       if (position == -600) {
         position = -100;
         images.style.left = -100;
      }
    }
  }
}


function auto() {
  position -= 2;
  var images = document.getElementById("carousel-images");
  var autotime = setInterval(move, 14);
  console.log(position);
  
  function move() {
    if (position % 100 == 0) {
      console.log(position);
      clearInterval(autotime);
    } else {
      position -= 2;
      images.style.left = position + "%";
       if (position == -600) {
         position = -100;
         images.style.left = -100;
      }
    }
  }
}


const autoplay = document.querySelector("#carousel-hidden");
  
autoplay.addEventListener("change", function(e){
  if (autoplay.checked == false) {
    console.log("I am a potato");
    clearInterval(intervalID);
  } else {
    auto();
    intervalID = setInterval(auto, 3000);
  }
})

function checked() {
  document.getElementById("carousel-hidden").checked = true;
  intervalID = setInterval(auto, 3000);
}

/*------- IMAGE CAROUSEL END --------*/


/*------- HOME START --------*/

function homeFadeUp() {
  document.getElementById("home").style.display = "block";
}

function homeFadeDown() {
  document.getElementById("home").style.display = "none";
}

/*------- HOME END --------*/

/*------- ABOUT ME START --------*/

function welcomeFadeUp() {
  document.getElementById("about").style.display = "block";
}

function welcomeFadeDown() {
  document.getElementById("about").style.display = "none";
}

/*------- ABOUT ME END --------*/

/*------- GOALS START --------*/

function welcomeFadeUp() {
  document.getElementById("goals").style.display = "block";
}

function welcomeFadeDown() {
  document.getElementById("goals").style.display = "none";
}

/*------- GOALS END --------*/

/*------- PROJECTS START --------*/

function welcomeFadeUp() {
  document.getElementById("projects").style.display = "block";
}

function welcomeFadeDown() {
  document.getElementById("projects").style.display = "none";
}

/*------- PROJECTS END --------*/

/*------- MUSIC START --------*/

function welcomeFadeUp() {
  document.getElementById("music").style.display = "block";
}

function welcomeFadeDown() {
  document.getElementById("music").style.display = "none";
}

/*------- MUSIC END --------*/

/*------- CONTACT START --------*/

function welcomeFadeUp() {
  document.getElementById("contact").style.display = "block";
}

function welcomeFadeDown() {
  document.getElementById("contact").style.display = "none";
}

/*------- CONTACT END --------*/