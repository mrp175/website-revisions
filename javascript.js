

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


/* NAV BUTTONS START */


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

/* NAV BUTTONS END */

/* projects fades - in + out start */

/* circuit bending start */
function circuitUp() {
  document.getElementById("circuit-wrapper").style.display = "block";
  document.getElementById("circuit-overlay").style.display = "grid";
  document.getElementById("circuit-overlay").scrollTop = 0;

  function down() {
    var opacity = 100;
    let intervalID; 
    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
      } else {
        opacity -= 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }
  down();

  function up() {
    document.getElementById("background-image-overlay").style.display = "block"
    console.log(document.getElementById("background-image-overlay").style.display);
    var opacity = 0;
    let intervalID; 

    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
        document.getElementById("circuit-overlay").style.overflowY = "scroll";
        document.getElementById("no-scroll").style.overflowY = "hidden";
      } else {
        opacity += 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        console.log(document.getElementById("background-image-overlay").style.opacity);
        document.getElementById("circuit-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }

  up();
}

function circuitDown() {
  document.getElementById("circuit-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  function up() {
    var opacity = 0;
    let intervalID; 
    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
      } else {
        opacity += 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }
  up();
  function down() {
    var opacity = 100;
    let intervalID; 

    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
        document.getElementById("background-image-overlay").style.display = "none"
        document.getElementById("circuit-overlay").style.display = "none";
        document.getElementById("circuit-wrapper").style.display = "none";
      } else {
        opacity -= 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        document.getElementById("circuit-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }

  down();
}
/* circuit bending end */


/* maxmsp start */
function maxmspUp() {
  document.getElementById("maxmsp-wrapper").style.display = "block";
  document.getElementById("maxmsp-overlay").style.display = "grid";
  document.getElementById("maxmsp-overlay").scrollTop = 0;

  function down() {
    var opacity = 100;
    let intervalID; 
    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
      } else {
        opacity -= 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }
  down();

  function up() {
    document.getElementById("background-image-overlay").style.display = "block"
    console.log(document.getElementById("background-image-overlay").style.display);
    var opacity = 0;
    let intervalID; 

    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
        document.getElementById("maxmsp-overlay").style.overflowY = "scroll";
        document.getElementById("no-scroll").style.overflowY = "hidden";
      } else {
        opacity += 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        console.log(document.getElementById("background-image-overlay").style.opacity);
        document.getElementById("maxmsp-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }

  up();
}

function maxmspDown() {
  document.getElementById("maxmsp-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  function up() {
    var opacity = 0;
    let intervalID; 
    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
      } else {
        opacity += 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }
  up();
  function down() {
    var opacity = 100;
    let intervalID; 

    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
        document.getElementById("background-image-overlay").style.display = "none"
        document.getElementById("maxmsp-overlay").style.display = "none";
        document.getElementById("maxmsp-wrapper").style.display = "none";
      } else {
        opacity -= 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        document.getElementById("maxmsp-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }

  down();
}
/* maxmsp end */


/* carousel start */
function carouselUp() {
  document.getElementById("carousel-wrapper").style.display = "block";
  document.getElementById("carousel-overlay").style.display = "grid";
  document.getElementById("carousel-overlay").scrollTop = 0;

  function down() {
    var opacity = 100;
    let intervalID; 
    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
      } else {
        opacity -= 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }
  down();

  function up() {
    document.getElementById("background-image-overlay").style.display = "block"
    console.log(document.getElementById("background-image-overlay").style.display);
    var opacity = 0;
    let intervalID; 

    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
        document.getElementById("carousel-overlay").style.overflowY = "scroll";
        document.getElementById("no-scroll").style.overflowY = "hidden";
      } else {
        opacity += 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        console.log(document.getElementById("background-image-overlay").style.opacity);
        document.getElementById("carousel-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }

  up();
}

function carouselDown() {
  document.getElementById("carousel-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  function up() {
    var opacity = 0;
    let intervalID; 
    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
      } else {
        opacity += 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }
  up();
  function down() {
    var opacity = 100;
    let intervalID; 

    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
        document.getElementById("background-image-overlay").style.display = "none"
        document.getElementById("carousel-overlay").style.display = "none";
        document.getElementById("carousel-wrapper").style.display = "none";
      } else {
        opacity -= 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        document.getElementById("carousel-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }

  down();
}
/* carousel end */


/* tribute start */
function tributeUp() {
  document.getElementById("tribute-wrapper").style.display = "block";
  document.getElementById("tribute-overlay").style.display = "grid";
  document.getElementById("tribute-overlay").scrollTop = 0;

  function down() {
    var opacity = 100;
    let intervalID; 
    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
      } else {
        opacity -= 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }
  down();

  function up() {
    document.getElementById("background-image-overlay").style.display = "block"
    console.log(document.getElementById("background-image-overlay").style.display);
    var opacity = 0;
    let intervalID; 

    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
        document.getElementById("tribute-overlay").style.overflowY = "scroll";
        document.getElementById("no-scroll").style.overflowY = "hidden";
      } else {
        opacity += 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        console.log(document.getElementById("background-image-overlay").style.opacity);
        document.getElementById("tribute-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }

  up();
}

function tributeDown() {
  document.getElementById("tribute-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  function up() {
    var opacity = 0;
    let intervalID; 
    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
      } else {
        opacity += 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }
  up();
  function down() {
    var opacity = 100;
    let intervalID; 

    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
        document.getElementById("background-image-overlay").style.display = "none"
        document.getElementById("tribute-overlay").style.display = "none";
        document.getElementById("tribute-wrapper").style.display = "none";
      } else {
        opacity -= 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        document.getElementById("tribute-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }

  down();
}
/* tribute end */


/* harmonic start */
function harmonicUp() {
  document.getElementById("harmonic-wrapper").style.display = "block";
  document.getElementById("harmonic-overlay").style.display = "grid";
  document.getElementById("harmonic-overlay").scrollTop = 0;

  function down() {
    var opacity = 100;
    let intervalID; 
    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
      } else {
        opacity -= 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }
  down();

  function up() {
    document.getElementById("background-image-overlay").style.display = "block"
    console.log(document.getElementById("background-image-overlay").style.display);
    var opacity = 0;
    let intervalID; 

    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
        document.getElementById("harmonic-overlay").style.overflowY = "scroll";
        document.getElementById("no-scroll").style.overflowY = "hidden";
      } else {
        opacity += 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        console.log(document.getElementById("background-image-overlay").style.opacity);
        document.getElementById("harmonic-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 15);
    move();
  }

  up();
}

function harmonicDown() {
  document.getElementById("harmonic-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  function up() {
    var opacity = 0;
    let intervalID; 
    function move() {
      if (opacity >= 100) {
        clearInterval(intervalID);
      } else {
        opacity += 5; 
        document.getElementById("mega-wrapper").style.opacity = opacity/100;
        document.getElementById("background-image").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }
  up();
  function down() {
    var opacity = 100;
    let intervalID; 

    function move() {
      if (opacity <= 0) {
        clearInterval(intervalID);
        document.getElementById("background-image-overlay").style.display = "none"
        document.getElementById("harmonic-overlay").style.display = "none";
        document.getElementById("harmonic-wrapper").style.display = "none";
      } else {
        opacity -= 5; 
        document.getElementById("background-image-overlay").style.opacity = opacity/400;
        document.getElementById("harmonic-overlay").style.opacity = opacity/100;
      }
    }
    intervalID = setInterval(move, 10);
    move();
  }

  down();
}
/* harmonic end */


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




/*function circuitU() {
  fadeIn();
  document.getElementById("circuit-wrapper").style.display = "block";
  document.getElementById("circuit-overlay").style.display = "grid";
  document.getElementById("circuit-overlay").scrollTop = 0;
  var opacity = 0;
  let intervalID; 

  function move() {
    if (opacity >= 100) {
      clearInterval(intervalID);
      document.getElementById("circuit-overlay").style.overflowY = "scroll";
      document.getElementById("no-scroll").style.overflowY = "hidden";
    } else {
      opacity += 5; 
      document.getElementById("circuit-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 10);
}

function circuitD() {
  fadeOut();

  document.getElementById("circuit-overlay").style.overflowY = "hidden";
  document.getElementById("no-scroll").style.overflowY = "scroll";
  var opacity = 100;
  let intervalID; 

  function move() {
    if (opacity <= 0) {
      clearInterval(intervalID);
        document.getElementById("circuit-overlay").style.display = "none";
        document.getElementById("circuit-wrapper").style.display = "none";
    } else {
      opacity -= 5; 
      document.getElementById("circuit-overlay").style.opacity = opacity/100;
    }
  }
  intervalID = setInterval(move, 10);
} */


function fadeOutRef() {
  document.getElementById("background-image-overlay").style.display = "none";
  document.getElementById("background-image").style.display = "block";
  document.getElementById("background-image").style.opacity = 1;
  document.getElementById("mega-wrapper").style.display = "block";
  document.getElementById("mega-wrapper").style.opacity = 1;
  document.getElementById("overlays").style.display = "none";
  document.getElementById("no-scroll").style.overflowY = "scroll";
}

/* projects fades - in + out end */

/* PROJECT BUTTONS START */


/* PROJECT BUTTONS END */