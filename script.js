/* =====================================
   SHRAVANFLIX 2.0 SCRIPT
===================================== */



// =====================================
// INTRO PAGE
// =====================================


function enterSite(){


    document.body.style.opacity="0";


    setTimeout(()=>{


        window.location.href="home.html";


    },800);


}







// =====================================
// HOME → LOGIN
// =====================================


function startJourney(){


    window.location.href="login.html";


}







// =====================================
// EPISODE NAVIGATION
// =====================================


function openLap(number){


    window.location.href =
    "lap" + number + ".html";


}// =====================================
// LOGIN → LIGHTS
// =====================================


function startRace(){


const name =
document.getElementById("driverName").value;


const code =
document.getElementById("pitCode").value;



if(name==="verstappenjr" && code==="15052026"){



localStorage.setItem(
"driverLoggedIn",
"true"
);



window.location.href="lights.html";



}

else{


document.getElementById("login-error").innerHTML =
"❌ INVALID DRIVER ID OR PASSWORD";


}



}

// =====================================
// F1 LIGHTS SEQUENCE
// =====================================


const lights =
document.querySelectorAll(".light");


const countdown =
document.getElementById("countdown");





if(lights.length > 0 && countdown){



    let current = 0;


    let number = 5;



    const race =
    setInterval(()=>{



        if(current < lights.length){



            lights[current]
            .classList.add("active");



            countdown.innerHTML =
            number;



            current++;


            number--;



        }

        else{


            clearInterval(race);



            countdown.innerHTML =
            "GO!";



            countdown.style.color =
            "#00ff55";




            setTimeout(()=>{


                window.location.href=
                "series.html";



            },2000);



        }



    },1000);



}// =====================================
// MEMORY BUTTONS
// =====================================


function likeMemory(){


    const button =
    event.target;



    button.innerHTML =
    "♥ Liked";


    button.classList.add("active");


}







function saveMemory(){


    const button =
    event.target;



    button.innerHTML =
    "✓ My List";


    button.classList.add("active");


}







// =====================================
// LAP STORY UNLOCK SYSTEM
// =====================================



function unlockNextLap(){



    localStorage.setItem(
        "storyCompleted",
        "true"
    );



}






function checkLapUnlock(){



    const nextButton =
    document.querySelector(".next-lap");



    if(nextButton){



        const completed =
        localStorage.getItem(
            "storyCompleted"
        );



        if(completed==="true"){


            nextButton.innerHTML =
            "▶ Continue Next Lap";


            nextButton.style.opacity="1";


            nextButton.disabled=false;


        }

        else{


            nextButton.innerHTML =
            "🔒 Complete Story First";


            nextButton.disabled=true;


        }


    }


}




window.addEventListener(
"load",
checkLapUnlock
);/* =====================================
   NEXT LAP NAVIGATION
===================================== */


function goNextLap(number){


    const completed =
    localStorage.getItem("storyCompleted");



    if(completed==="true"){


        window.location.href =
        "lap"+number+".html";


    }


    else{


        alert(
        "Complete this lap story first 🏎️"
        );


    }


}/* =====================================
   SHRAVANFLIX LAP PROGRESS SYSTEM
===================================== */



// MARK LAP COMPLETE

function completeLap(lapNumber){


    localStorage.setItem(
        "lap"+lapNumber+"Complete",
        "true"
    );


}








// CHECK NEXT LAP UNLOCK

function checkUnlock(nextLap){


    const previous =
    localStorage.getItem(
        "lap"+(nextLap-1)+"Complete"
    );



    const button =
    document.querySelector(".next-lap");



    if(button){



        if(previous==="true"){



            button.innerHTML =
            "▶ Continue Lap "+nextLap;



            button.disabled=false;



            button.style.background="#E50914";



        }


        else{


            button.innerHTML =
            "🔒 Finish Current Lap First";


            button.disabled=true;



        }


    }



}








// OPEN NEXT LAP


function goNextLap(number){



    const unlocked =
    localStorage.getItem(
        "lap"+(number-1)+"Complete"
    );



    if(unlocked==="true"){



        window.location.href =
        "lap"+number+".html";



    }

    else{


        alert(
        "Complete this lap before continuing 🏎️"
        );


    }


}








// AUTO COMPLETE WHEN STORY IS READ


window.addEventListener(
"scroll",
()=>{


const page =
document.querySelector(".story-card");


if(page){



const position =
page.getBoundingClientRect();



if(position.bottom < window.innerHeight){



completeLap(1);



}



}



}

);/* =====================================
   CAKE FINALE
===================================== */


function blowCandle(){


let timer =
document.getElementById("timer");


let birthday =
document.getElementById("birthday");



timer.innerHTML="2";



setTimeout(()=>{

timer.innerHTML="1";

},1000);



setTimeout(()=>{


timer.innerHTML="";


document.querySelectorAll(".candle")
.forEach(c=>{

c.style.display="none";

});



birthday.innerHTML=
"🎂 HAPPY BIRTHDAY 🎂";



document.body.style.background="#000";



},2000);



}