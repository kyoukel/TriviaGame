// WHAT'S NEEDED FOR THE GAME LOGIC

// ---> BACKGROUND PICTURE - CARTOONS & LINK IMAGES FILE
// ---> ADD CSS & LINK CSS FILE

        //You'll create a trivia form with multiple choice or true/false options (your choice).
            //create inputs with radio buttons in html 

            //The player will have a limited amount of time to finish the quiz.
            //player chooses answers
                //log the players choice
                //compare the players choice to the correct answer

            //The game ends when the time runs out.The page will reveal the number of questions that players answer correctly and incorrectly.
            //  Don't let the player pick more than one answer per question.

            //Don't forget to include a countdown timer.
    
    var timer;
    var timeUp;
    var time = 26000;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var questionArray = [
        "Who is the little chicken, with glasses, that appeared with Foghorn              Leghorn?", 
        "Who are Donald Duck's nephews?", 
        "Garfields' favorite food is?", 
        "Which weapon does Raphael use in the Teenage Mutant Ninja Turtles?",
        "What was the family's dog named on the Jetsons?"];

    var answerArray = [
        "a3",
        "b2",
        "c4",
        "d2",
        "e3"];

    var startHTML = $('#startScreen')[0].outerHTML
        // console.log(startHTML);

    var quizHTML = $('#quiz')[0].outerHTML
        // console.log(quizHTML);

    var resultsHTML = $('#results')[0].outerHTML
        // console.log(resultsHTML);

        $('#wrapper').html(startHTML);
        $('#start').on('click', function() {
          $('#wrapper').html(quizHTML);
          timer=setInterval(function(){
          time-=1000;
          $('#insertTimer').html(time/1000);
            // console.log(timer);
          },1000);
          timeUp = setTimeout(function(){
            clearInterval(timer);
            clearTimeout(timeUp);
          }, 26000)
           // console.log(time);
          $('#submit').on('click', function(){
            $('#wrapper').html(resultsHTML);
            clearInterval(timer);
            clearTimeout(timeUp);
            for(var i=0; i < $('.question').length;i++){
                if(!$($('.question')[i]).find('input:checked').val()) {
                  Unanswered++
                }else if($($('.question')[i]).find('input:checked').val()===answers[i]){
                  correct++
                } else {
                  Incorrect++
                }
            }
          });
        });

        $( "input" ).on( "click", function() {
            $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
        });

        var timer = setInterval(function(){}, 1000);

// ========================THIS IS ALL MY CODE TRYING TO MAKE FUNCTIONS WORK BY COMBINING ACTIVITIES AND INTERNET SOURCES==================================THIS IS WHERE I AM AT WITH CODING FUNCTIONS...IT'S A MESS BUT SUPER DUPER PROGRESS IN HAVING ENOUGH CONFIDENCE TO TRY THEM ON MY OWN.



//     $(document).ready(function() {


// $("#start").on("click",function() {
        //     var startHTML = $('#startScreen')[0].outerHTML
        //       console.log(startHTML);
        // });

//         $("#start").click(function(event){
//             $("#results").hide();
//         });
    
//         $("#start").click(function(){
//             $("form").show();
//         });
//     });

//     var questionArray = [
//         "Who is the little chicken, with glasses, that appeared with Foghorn              Leghorn?", 
//         "Who are Donald Duck's nephews?", 
//         "Garfields' favorite food is?", 
//         "Which weapon does Raphael use in the Teenage Mutant Ninja Turtles?",
//         "What was the family's dog named on the Jetsons?"];



//         for(var i = 0; i < questionArray.length; i++) {

//             console.log(questionArray[3]);
//     };


// // setTimeout();

// // 1. 1st Page HTML***
// // ---> Game Title
// // ---> Start Button 

// // 2. 2nd Page *** When Start button is clicked...
// // ---> Displays index2.html file

//     //=========START BUTTON CLICK FUNCTION ()============


//     $('start').on("click", function(){
//         var timer = 120;
//         setInterval(function() {
//             timer--;
//             if (timer >= 0) {
//                 span = document.getElementById("timer");
//                 span.innerHTML = timer;
//               }
//               if (timer === 0) {
//                   alert('sorry, out of time');
//                   clearInterval(counter);
//               }
//             }, 1000);
//     });

//     $('start').on("click", function() {
//         var timer = 120
//         $('#insertTimer').append("<span>" + timer + "</span>");
//     });

//     function countdown() {
        
//     }


//     var timer = 120;

//     function decrement() {
//         timer--;
//         if (timer <=0) {
//             console.log(timer);
//         }
//     };
    
//     decrement();

//     var insert = timer;
    
//     function timer() {
//         setTimeout(myCountdown, 10000)  
//     }

//     function myCountdown() {
//         $("#insertTimer").text("<p>Time Remaining: "+ insert + "</p>");
//     }

// // ---> CALL COUNTDOWN TIMER ()
// // ---> Timer is displayed on screen

//     //==========COUNTDOWN TIMER FUNCTION ()==============
//     function countdown() {
//         $()
//     }

// // 3. User has 120 seconds to choose an answer for all 5 questions.
// // ---> DISPLAYS QUESTIONS = Questions with radio button multiple choices displayed.
// ---> user can only choose 1 answer per question.




// 4. INDEX3.HTML *** When countdown timer reaches 0....
// ---> Displays INDEX2.HTML with right, wrong, & missed answers.
// ---> Hides 2nd page html.

// 5. Create counter that logs the user's choices for...
// ---> adds correct answers
// ---> adds incorrect answers
// ---> adds missed answers

    //=======COUNTER FUNCTION THAT ADDS CHOICES========

// 6. Compares the players choice to the correct answer and...
// ---> Inserts the total at the html ID targeted for each...
// ---> correct ID
// ---> incorrect ID
// ---> missed ID

// ============ IF / ELSE IF STATEMENTS THAT COMPARE & INSERT ANSWERS==================



