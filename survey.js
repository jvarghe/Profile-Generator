/* CHALLENGE: M01 W04: MORE ASYNC JS: FUN PROFILE GENERATOR
 * 
 * We've learned a bit about the asynchronous nature of JavaScript and how 
 * callbacks are used for slow code, which takes time to complete. In this
 * activity we see what it looks like when we need to execute a sequence of
 * such asynchronous tasks in a linear manner. In other words, we will create 
 * a linear flow through asynchronous, callback-based function calls. 
 * 
 * We will learn how and when to leverage nested callbacks, as well as their 
 * potential drawbacks, and in doing so become more comfortable in solving 
 * real world problems using Node's asynchronous approach.
 * The readline module in Node helps us read one line at a time. It can use any input stream, but in our case we are only interested in stdin.
 * OBJECTIVE: It's hard to come up with fun and quirky descriptions for our 
 * online profiles. Let's help out our fellow internetters by creating a handy 
 * profile generator. To help out our fellow users, let's create a quick survey 
 * app which asks the user a bunch of questions like their favourite music, 
 * activity, food, sport, etc. It will then generate a profile description for 
 * them to use online, like this:
 * 
 *     Devani loves listening to Ludovico Einaudi while coding, devouring Yak 
 *     Momos for brunch, prefers Tennis over any other sport, and is amazing 
 *     at dropping mad puns at inopportune times.
 * 
 * 
 * TIPS:
 * 
 *   * READING USER INPUT: Since we'll be surveying the user, we need a nice way 
 *     to ask questions and fetch answers. Instead of reading one character at 
 *     a time, as we've done with `stdin` directly, Node has a built-in module 
 *     to read one line at a time. The `readline` module in Node helps us read 
 *     one line at a time. It can use any input stream, but in our case we are 
 *     only interested in `stdin`.
 * 
 */


// IMPORTS
// Import Node.js' `readline` module into the project.
const readline = require('readline');



const generateProfile = function() {

  // Create an `answers` array to hold user responses to biographical questions.
  let answers = [];
  const questions = [
    "What's your name?",
    "What's your nickname?",
    "What's an activity you like doing?",
    "What do you listen to while doing that?",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "What's your favourite thing to eat for that meal?",
    "Which sport is your absolute favourite?",
    "What is your superpower? In a few words, tell us what you are amazing at!"
  ];
  
  
  // COLLECT USER INPUT
  // Create an object (of class `InterfaceConstructor`) with `input` and `output` 
  // streams.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
  // DEFAULT READLINE TEXT
  // 
  // Uses the `readline` object's `query` parameter to output a message to the
  // user. When the user responds, the response is passed to the predicate via 
  // the `answer` parameter. The user response triggers the body of this 
  // `readline` object, which simply parrots the answer back to the user.
  // 
  // rl.question('What do you think of Node.js? ', (answer) => {
  //   console.log(`Thank you for your valuable feedback: ${answer}`);



  // QUESTION 1:
  // Push queries to the console, and collect answers.
  rl.question("What's your name?: ", (answer1) => {
    // Print user input back to the console to confirm receipt:
    console.log(`Your Feedback: ${answer1}`);

    // QUESTION 2:
    rl.question("What's your nickname?: ", (answer2) => {
      console.log(`Your Feedback: ${answer2}`);

      // QUESTION 3:
      rl.question("What's an activity you like doing?: ", (answer3) => {
        console.log(`Your Feedback: ${answer3}`);

        // QUESTION 4:
        rl.question("What do you listen to while doing that?: ", (answer4) => {
          console.log(`Your Feedback: ${answer4}`);

          // QUESTION 5:
          rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (answer5) => {
            console.log(`Your Feedback: ${answer5}`);
  
            // QUESTION 6:
            rl.question("What's your favourite thing to eat for that meal?: ", (answer6) => {
              console.log(`Your Feedback: ${answer6}`);
  
              // QUESTION 7:
              rl.question("Which sport is your absolute favourite?: ", (answer7) => {
                console.log(`Your Feedback: ${answer7}`);

                // QUESTION 8:
                rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", (answer8) => {
                  console.log(`Your Feedback: ${answer8}`);

                  // QUESTION 9:
                  rl.question("DO YOU HATE THIS PILE OF ABOMINATION THAT IS JAVASCRIPT!?: ", (answer9) => {
                    console.log(`Your Feedback: ${answer9}`);

                    // When you're doing using the `readline` object, close the open connection
                    // to the terminal.
                    rl.close();
                  });

                });

              });

            });

          });

        });

      });
   
    });

  });


  // Gather the answers and generate and profile summary with them:
  // console.log(`${answer[0]}, also goes by ${answer[1]}. ${answer[1]} loves to ${answer[2]}, while listening to ${answer[3]}. ${answer[1]} loves ${answer[4]}, especially when having ${answer[5]}. ${answer[1]} is a big fan of ${answer[6]}. If there's one thing that ${answer[1]} is preternaturally good at, it's ${answer[7]}.`);
};


generateProfile();








  

