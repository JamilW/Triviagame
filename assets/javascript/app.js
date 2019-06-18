var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "Which rap group is not a member of the Native Tongues?",
    answers: [ "De La Soul", "Wu-Tang Clan", "A Tribe Called Quest", "Jungle Brothers" ],
    correctAnswer: "Wu-Tang Clan"
  },
  {
    question: "Which was the first rap album to go platinum?",
    answers: [ "License to Ill", "Straight Outta Compton", "Paid In Full", "Raising Hell" ],
    correctAnswer: "Raising Hell"
  },
  {
    question: "Which rap group was the first rap artists to get a million dollar record deal?",
    answers: [ "Eric B. & Rakim", "Wu-Tang Clan", "Public Enemy", "N.W.A." ],
    correctAnswer: "Eric B & Rakim"
  },
  {
    question: "Who is the highest selling rap artist of all time?",
    answers: [ "Jay-Z", "2Pac", "Eminem", "MC Hammer" ],
    correctAnswer: "Eminem"
  },
  {
    question: "Is the debut of rap artist, Nas, with the album, Illmatic, considered a classic?",
    answers: [ "True", "False" ],
    correctAnswer: "True"
  },
  {
    question: "Which album did not sell over 10 million copies?",
    answers: ["The Blueprint", "The Marshall Mathers LP", "All Eyez On Me", "Life After Death"],
    correctAnswer: "The Blueprint"
  },
  {
    question: "Who was the first rap artist(s) to win a Grammy?",
    answers: [ "MC Hammer", "LL Cool J", "Run DMC", "DJ Jazzy Jeff & The Fresh Prince" ],
    correctAnswer: "DJ Jazzy Jeff & The Fresh Prince"
  },
  {
    question: "Did Jay-Z defeat Nas in their rap battle?",
    answers: [ "True", "False" ],
    correctAnswer: "False"
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function ()  {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "'style='color: #FBBC05'" + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  },
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});


