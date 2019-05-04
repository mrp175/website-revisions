

function pageLoad() {
  home();
}

/*------- HOME START --------*/



function homeFadeUp() {
  console.log('projects');
  document.getElementById("home-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("home-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}

function homeFadeDown() {
  document.getElementById("home-overlay").style.display = "none";
  document.getElementById("home-overlay").style.opacity = 0;
}

/*------- HOME END --------*/

/*------- ABOUT ME START --------*/



function aboutFadeUp() {
  console.log('projects');
  document.getElementById("about-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("about-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}

function aboutFadeDown() {
  document.getElementById("about-overlay").style.display = "none";
  document.getElementById("about-overlay").style.opacity = 0;
}

/*------- ABOUT ME END --------*/

/*------- GOALS START --------*/

function goalsFadeUp() {
  document.getElementById("goals-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("goals-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}

function goalsFadeDown() {
  document.getElementById("goals-overlay").style.display = "none";
  document.getElementById("goals-overlay").style.opacity = 0;
}

/*------- GOALS END --------*/

/*------- PROJECTS START --------*/

function projectsFadeUp() {
  console.log('projects');
  document.getElementById("projects-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("projects-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}

function projectsFadeDown() {
  document.getElementById("projects-overlay").style.display = "none";
  document.getElementById("projects-overlay").style.opacity = 0;
}

/*------- PROJECTS END --------*/

/*------- MUSIC START --------*/

function musicFadeUp() {
  document.getElementById("music-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("music-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}


function musicFadeDown() {
  document.getElementById("music-overlay").style.display = "none";
  document.getElementById("music-overlay").style.opacity = 0;
}

/*------- MUSIC END --------*/

/*------- CONTACT START --------*/

function contactFadeUp() {
  document.getElementById("contact-overlay").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("contact-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 20);
}

function contactFadeDown() {
  document.getElementById("contact-overlay").style.display = "none";
  document.getElementById("contact-overlay").style.opacity = 0;
}

/* function contactFadeDown() {

  var opacity = 100;
  let intervalID;

  function move() {
    if (opacity <= 0) {
      clearInterval(intervalID);
      document.getElementById("contact-overlay").style.display = "none";
    } else {
      opacity -= 5;
      console.log(opacity);
      document.getElementById("contact-overlay").style.opacity = opacity/100;
    }
  }
 
  var exists = document.getElementById("contact-overlay").style.display;
  console.log(exists);
  if (exists === "block") {
    console.log("i am");
     intervalID = setInterval(move, 20);
  } 
} */

/*------- CONTACT END --------*/


function home() {
  document.getElementById("home-button").disabled = true;
  document.getElementById("about-button").disabled = false;
  document.getElementById("goals-button").disabled = false;
  document.getElementById("projects-button").disabled = false;
  document.getElementById("music-button").disabled = false;
  document.getElementById("contact-button").disabled = false;
  homeFadeUp();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function about() {
  document.getElementById("home-button").disabled = false;
  document.getElementById("about-button").disabled = true;
  document.getElementById("goals-button").disabled = false;
  document.getElementById("projects-button").disabled = false;
  document.getElementById("music-button").disabled = false;
  document.getElementById("contact-button").disabled = false;
  homeFadeDown();
  aboutFadeUp();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function goals() {
  document.getElementById("home-button").disabled = false;
  document.getElementById("about-button").disabled = false;
  document.getElementById("goals-button").disabled = true;
  document.getElementById("projects-button").disabled = false;
  document.getElementById("music-button").disabled = false;
  document.getElementById("contact-button").disabled = false;
  homeFadeDown();
  aboutFadeDown();
  goalsFadeUp();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function projects() {
  document.getElementById("home-button").disabled = false;
  document.getElementById("about-button").disabled = false;
  document.getElementById("goals-button").disabled = false;
  document.getElementById("projects-button").disabled = true;
  document.getElementById("music-button").disabled = false;
  document.getElementById("contact-button").disabled = false;
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeUp();
  musicFadeDown();
  contactFadeDown();
}

function music() {
  document.getElementById("home-button").disabled = false;
  document.getElementById("about-button").disabled = false;
  document.getElementById("goals-button").disabled = false;
  document.getElementById("projects-button").disabled = false;
  document.getElementById("music-button").disabled = true;
  document.getElementById("contact-button").disabled = false;
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeUp();
  contactFadeDown();
}

function contact() {
  document.getElementById("home-button").disabled = false;
  document.getElementById("about-button").disabled = false;
  document.getElementById("goals-button").disabled = false;
  document.getElementById("projects-button").disabled = false;
  document.getElementById("music-button").disabled = false;
  document.getElementById("contact-button").disabled = true;
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeUp();
}