var timeLeft = 60;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
var $questionContent = $("<div></div>");
var questions = [
    {question: "Which rap group is not a member of the Native Tongues?",
     choices: ["A Tribe Called Quest", "Wu-Tang Clan", "De La Soul", "Jungle Brothers"],
     answer: 1
    },
    {question: "First Rap Album to Go Platinum?",
     choices: ["License to Ill", "Straight Outta Compton", "Straight Outta Compton", "Raising Hell"],
     answer: 3
    },
    {question: "Which rap group was the first rap artists to get a million dollar record deal?",
     choices: ["Eric B. & Rakim", "Wu-Tang Clan", "Public Enemy", "N.W.A."],
     answer: 0
    },
    {question: "Who is the highest selling rap artist of all time?",
     choices: ["Jay-Z", "2Pac", "Eminem", "MC Hammer"],
     answer: 2
    },
    {question: "Is the debut of rap artist, Nas, with the album, Illmatic, considered a classic?",
     choices: ["True", "False"],
     answer: 0
    },
    {question: "Which album did not sell over 10 million copies?",
     choices: ["The Blueprint", "The Marshall Mathers LP", "All Eyez On Me", "Life After Death"],
     answer: 0
    },
    {question: "Who was the first rap artist(s) to win a Grammy?",
     choices: ["MC Hammer", "LL Cool J", "Run DMC", "DJ Jazzy Jeff and the Fresh Prince"],
     answer: 3
   },
    {question: "Jay-Z beat Nas in their rap battle",
     choices: ["True", "False"],
     answer: 1
    },
]
var correctAnswers;
var incorrectAnswers;
var unanswered;

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
        $("#results").show();
        $(".quiz").hide();
    } else {
        elem.innerHTML = "Time Remaining: " + timeLeft + " seconds remaining";
        timeLeft--;
    }
}

function quiz()   {
   // $("#q1").html(questions.question1);
   // $("#q2").html(questions.question2);
   // $("#q3").text(questions.question3).show();
   // $("#q4").text(questions.question4).show();
   // $("#q5").text(questions.question5).show();
   // $("#q6").text(questions.question6).show();
   // $("#q7").text(questions.question7).show();
   // $("#q8").text(questions.question8).show();

   for(var i=0; i < questions.length; i++) {

      var el = "#q" + (i +1);

      $(el).prepend("<div>" + questions[i].question + "</div>");

   }
}
quiz();

