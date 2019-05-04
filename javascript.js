

/*------- HOME START --------*/

function homeFadeUp() {
  document.getElementById("home").style.display = "block";
}

function homeFadeDown() {
  document.getElementById("home").style.display = "none";
}

/*------- HOME END --------*/

/*------- ABOUT ME START --------*/

function aboutFadeUp() {
  document.getElementById("about").style.display = "block";
}

function aboutFadeDown() {
  document.getElementById("about").style.display = "none";
}

/*------- ABOUT ME END --------*/

/*------- GOALS START --------*/

function goalsFadeUp() {
  document.getElementById("goals").style.display = "block";
}

function goalsFadeDown() {
  document.getElementById("goals").style.display = "none";
}

/*------- GOALS END --------*/

/*------- PROJECTS START --------*/

function projectsFadeUp() {
  document.getElementById("projects").style.display = "block";
}

function projectsFadeDown() {
  document.getElementById("projects").style.display = "none";
}

/*------- PROJECTS END --------*/

/*------- MUSIC START --------*/

function musicFadeUp() {
  document.getElementById("music").style.display = "block";
}

function musicFadeDown() {
  document.getElementById("music").style.display = "none";
}

/*------- MUSIC END --------*/

/*------- CONTACT START --------*/

function contactFadeUp() {
  document.getElementById("contact").style.display = "block";
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
    } else {
      opacity += 5; 
      document.getElementById("contact").style.opacity = opacity/100;
    }
  }

  intervalID = setInterval(move, 20);

  

}


function contactFadeDown() {

  var opacity = 100;
  let intervalID;

  function move() {
    if (opacity <= 0) {
      clearInterval(intervalID);
      document.getElementById("contact").style.display = "none";
    } else {
      opacity -= 5;
      console.log(opacity);
      document.getElementById("contact").style.opacity = opacity/100;
    }
  }
 
  var exists = document.getElementById("contact").style.display;
  console.log(exists);
  if (exists === "block") {
    console.log("i am");
     intervalID = setInterval(move, 20);
  } 
}

/*------- CONTACT END --------*/


function home() {
  homeFadeUp();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function about() {
  homeFadeDown();
  aboutFadeUp();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function goals() {
  homeFadeDown();
  aboutFadeDown();
  goalsFadeUp();
  projectsFadeDown();
  musicFadeDown();
  contactFadeDown();
}

function projects() {
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeUp();
  musicFadeDown();
  contactFadeDown();
}

function music() {
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeUp();
  contactFadeDown();
}

function contact() {
  homeFadeDown();
  aboutFadeDown();
  goalsFadeDown();
  projectsFadeDown();
  musicFadeDown();
  contactFadeUp();
}