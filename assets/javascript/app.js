var timeLeft = 30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
var $questionContent = $("<div></div>");
var questions = [
    {question: "Which rap group is not a member of the Native Tongues?",
     choices1: ["A Tribe Called Quest", "Wu-Tang Clan", "De La Soul", "Jungle Brothers"],
     answer: 1
    },
    {question: "First Rap Album to Go Platinum?",
     choices2: ["License to Ill", "Straight Outta Compton", "Paid In Full", "Raising Hell"],
     answer: 3
    },
    {question: "Which rap group was the first rap artists to get a million dollar record deal?",
     choices3: ["Eric B. & Rakim", "Wu-Tang Clan", "Public Enemy", "N.W.A."],
     answer: 0
    },
    {question: "Who is the highest selling rap artist of all time?",
     choices4: ["Jay-Z", "2Pac", "Eminem", "MC Hammer"],
     answer: 2
    },
    {question: "Is the debut of rap artist, Nas, with the album, Illmatic, considered a classic?",
     choices5: ["True", "False"],
     answer: 0
    },
    {question: "Which album did not sell over 10 million copies?",
     choices6: ["The Blueprint", "The Marshall Mathers LP", "All Eyez On Me", "Life After Death"],
     answer: 0
    },
    {question: "Who was the first rap artist(s) to win a Grammy?",
     choices7: ["MC Hammer", "LL Cool J", "Run DMC", "DJ Jazzy Jeff & the Fresh Prince"],
     answer: 3
   },
    {question: "Jay-Z beat Nas in their rap battle",
     choices8: ["True", "False"],
     answer: 1
    },
]
var currentQuestion
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

function submitButton() {
   $("#submit").on("click", function() {
      $("#results").show();
      $(".quiz").hide();
   });
}
submitButton();

function quiz()   {
   for(var i = 0; i < questions.length; i++) {
      var el = "#q" + (i + 1);
      $(el).prepend("<div>" + questions[i].question + "</div>"); 
      }
      for(var j = 0; j < questions.length; j++)   {
         console.log(questions);
         var e1 = ".answer1" + (j + 1);
         var e2 = ".answer2" + (j + 1);
         var e3 = ".answer3" + (j + 1);
         var e4 = ".answer4" + (j + 1);
         var e_array = [e1, e2, e3, e4];
     //    for (var i = 0; i < questions[j].choices.length; i++) {   
            $(e_array[i]).text("<label>" + "<input>" + "A: " + questions.indexOf("A Tribe Called Quest") + "</label>" + "<br>");
      //      $(e_array[i]).html(questions[j].choices);
  //          console.log(questions[j].choices[k]);
         }
         }
         
      
      quiz();

     

