// Global variables
var timeLeft = 30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
var $questionContent = $("<div></div>");
var questions = [
    {question: "Which rap group is not a member of the Native Tongues?",
     choices1: [ "De La Soul", "Wu-Tang Clan", "A Tribe Called Quest", "Jungle Brothers"],
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
var results;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered;

// Will show start button and hide quiz/results
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

// Show results/hide quize if timer runs out
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

// Show results/hide quiz if submit button clicked
function submitButton() {
   $("#submit").on("click", function() {
      $("#results").show();
      $(".quiz").hide();
   });
}
submitButton();

// Displaying questions
function quiz()   {
   for(var i = 0; i < questions.length; i++) {
      var el = "#q" + (i + 1);
      $(el).prepend("<div>" + questions[i].question + "</div>"); 
   }
}  
quiz();

// Store correct answers
function init()   {
   sessionStorage.setItem("a1", 1);
   sessionStorage.setItem("a2", 3);
   sessionStorage.setItem("a3", 0);
   sessionStorage.setItem("a4", 2);
   sessionStorage.setItem("a5", 0);
   sessionStorage.setItem("a6", 0);
   sessionStorage.setItem("a7", 3);
   sessionStorage.setItem("a8", 1);
}

// Records answers
function process(q)  {
   if (q == "q1") {
      var submitted = $("input[name=q1]:checked").val();
         if (submitted == sessionStorage.a1) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q2") {
      var submitted = $("input[name=q2]:checked").val();
         if (submitted == sessionStorage.a2) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q3") {
      var submitted = $("input[name=q3]:checked").val();
         if (submitted == sessionStorage.a3) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q4") {
      var submitted = $("input[name=q4]:checked").val();
         if (submitted == sessionStorage.a4) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q5") {
      var submitted = $("input[name=q5]:checked").val();
         if (submitted == sessionStorage.a5) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q6") {
      var submitted = $("input[name=q6]:checked").val();
         if (submitted == sessionStorage.a6) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q7") {
      var submitted = $("input[name=q7]:checked").val();
         if (submitted == sessionStorage.a7) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
   }

   if (q == "q8") {
      var submitted = $("input[name=q8]:checked").val();
         if (submitted == sessionStorage.a8) {
            correctAnswers++;
      }  else  {
            incorrectAnswers++;
      }
      $("#correct").html("<p>" + correctAnswers + "</p>")
      $("#incorrect").html("<p>" + incorrectAnswers + "</p>")
   }
   return false;
}
