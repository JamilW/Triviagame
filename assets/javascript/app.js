var timeLeft = 30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
var questions = [
    {question: "Which rap group is not a member of the Native Tongues?",
     answers: {
        a: "A Tribe Called Quest",
        b: "Wu-Tang Clan",
        c: "De La Soul",
        d: "Jungle Brothers"
     },
     answer: "b"
    },
    {question: "First Rap Album to Go Platinum?",
     answers: {
        a: "License to Ill",
        b: "Straight Outta Compton",
        c: "Radio",
        d: "Raising Hell"
     },
     answer: "d"
    },
    {question: "Which rap group was the first rap artists to get a million dollar record deal?",
     answers: {
        a: "Eric B. & Rakim",
        b: "Wu-Tang Clan",
        c: "Public Enemy",
        d: "N.W.A."
     },
     answer: "a"
    },
    {question: "Who is the highest selling rap artist of all time?",
     answers: {
        a: "Jay-Z",
        b: "2Pac",
        c: "Eminem",
        d: "MC Hammer"
     },
     answer: "c"
    },
    {question: "Is the debut of rap artist, Nas, with the album, Illmatic, considered a classic?",
     answers: {
        a: "True",
        b: "False",
     },
     answer: "a"
    },
    {question: "Which album did not sell over 10 million copies?",
     answers: {
        a: "The Blueprint",
        b: "The Marshall Mathers LP",
        c: "All Eyez On Me",
        d: "Life After Death"
     },
     answer: "a"
    },
    {question: "Who was the first rap artist(s) to win a Grammy?",
     answers: {
        a: "MC Hammer",
        b: "LL Cool J",
        c: "Run DMC",
        d: "DJ Jazzy Jeff and the Fresh Prince"
     },
     answer: "d"
   },
    {question: "Jay-Z beat Nas in their rap battle",
     answers: {
        a: "True",
        b: "False",   
     },
     answer: "b"
    },
]

function startGame() {
    $(".quiz").hide();
    $("#results").hide();
    $("#start").on("click", function()  {
       console.log("click")
        $("#start").hide().css("display", "none");
        $(".quiz").show().css("display", "block");
   });
}
startGame();

function countdown() {
    if (timeLeft == -1) { 
        clearTimeout(timerId);
    } else {
        elem.innerHTML = "Time Remaining: " + timeLeft + " seconds remaining";
        timeLeft--;
    }
}

