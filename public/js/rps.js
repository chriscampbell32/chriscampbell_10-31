$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];
  var round = "";
  var userScore = 0;
  var cpuScore  = 0;
  var draws = 0;

  //random number generator for computer choice
  var cpuChoice = Math.floor(Math.random() * choices.length);

  $(document).on('click', "#rock, #paper, #scissors", function(){
   
    
    var cpuChoice = Math.floor(Math.random() * choices.length);
    
    if (cpuChoice ==1){
      cpuChoice = "rock";
    } else if(cpuChoice = 2) {
      cpuChoice = "paper";
    } else {
      cpuChoice = "scissors";
    };

    //sets usercHOICE. connect to cpuCcohoice
    var userChoice = $(this).data('choice')
    compare(userChoice, cpuChoice);


    //create reveal user and cpu functions
    function revealUserChoice() {
      if (userChoice === "rock"){
        $("#userChoice").addClass("fa fa-hand-" + userChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-paper-o fa-hand-scissors-o");
      } else if(userChoice === "paper") {
        $("#userChoice").addClass("fa fa-hand-" + userChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-rock-o fa-hand-scissors-o");
      } else {
        $("#userChoice").addClass("fa fa-hand-" + userChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-rock-o fa-hand-paper-o");
      }
    };
    
    function revealComputerChoice() {
      if (cpuChoice === "rock") {
        $("#cpuChoice").addClass("fa fa-hand-" + cpuChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-paper-o fa-hand-scissors-o");
      } else if(cpuChoice === "paper") {
        $("#cpuChoice").addClass("fa fa-hand-" + cpuChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-rock-o fa-hand-scissors-o");
      } else {
        $("#cpuChoice").addClass("fa fa-hand-" + cpuChoice.toLowerCase() + "-o fa-1x").removeClass("fa-hand-rock-o fa-hand-paper-o");
      }
    };

    //call it
    revealUserChoice();
    revealComputerChoice();
    round++;
    $("#round").html(round);

    if (round === 3) {
      if (userScore > cpuScore){
        $("#modalResult").html("you win baby!!");
        } else if (userScore < cpuScore) {
        $("#modalResult").html("You lose, you are not good at this game!");
      } else {
        $("#modalResult").html("It's a draw, you should play again!");
      
      }

      $("#gameOver").modal("show");
      $("#gameOver").on('hide.bs.modal', function () {
        round = "";
        userScore = 0;
        cpuScore = 0;
        draws = 0;
        userChoice="";
        cpuChoice ="";
        rockWinner = "";
        paperWinner = "";
        scissorWinner = "";
        tieMsg = "";
        $("#round").html(round);
        $(".userScore").html(userScore);
        $(".cpuScore").html(cpuScore);
        $("#userChoice").removeClass("fa-hand-paper-o fa-hand-scissors-o fa-hand-rock-o");
        $("#cpuChoice").removeClass("fa-hand-paper-o fa-hand-scissors-o fa-hand-rock-o");
        $("#gameMsg").html(rockWinner);
        $("#gameMsg").html(paperWinner);
        $("#gameMsg").html(scissorWinner);
        $("#gameMsg").html(tieMsg);
      })
    }
  });
    
    
  //compare the userChoice with cpuChoice and give a message
  var compare = function(userChoice, cpuChoice) {
    var rockWinner = "rock wins!";
    var paperWinner = "paper wins!";
    var scissorWinner = "scissors wins!";
    var tieMsg = "tie game!";
  

  //if-else outcomes. 
  if (userChoice === cpuChoice) {
    $("#gameMsg").html(tieMsg);
    draws++;
    $("#draws").html(draws);
    return tieMsg;
  } else if (userChoice === "rock") {
    if (cpuChoice === "scissors") {
      $("#gameMsg").html(rockWinner);
      userScore++;
      $(".userScore").html(userScore);
        return rockWinner;
      } else {
        $("#gameMsg").html(paperWinner);
        cpuScore++;
        $(".cpuScore").html(cpuScore);
        return paperWinner;   
      }
    } else if (userChoice === "paper") {
      if (cpuChoice === "rock") {
        $("#gameMsg").html(paperWinner);
        userScore++;
        $(".userScore").html(userScore);
        return paperWinner; 
      } else {
        $("#gameMsg").html(scissorWinner);
        cpuScore++;
        $(".cpuScore").html(cpuScore);
        return scissorWinner;
      }
    } else {
      if (userChoice === "scissors") {
        if (cpuChoice === "paper") {
          $("#gameMsg").html(scissorWinner);
          userScore++;
          $(".userScore").html(userScore);
          return scissorWinner;
        } else {
          $("#gameMsg").html(rockWinner);
          cpuScore++;
          $(".cpuScore").html(cpuScore);
          return rockWinner;
        }
      }
    }
  }
   
 });
  
 
  

