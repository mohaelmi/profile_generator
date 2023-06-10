const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//list of questions
const questions = [
"What's your name? Nicknames are also acceptable :)",
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite (eg: dinner, brunch, etc.)",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"
]


rl.question(questions[0], (name) => {
  rl.question(questions[1], (activity) => {
    rl.question(questions[2], (listen) => {
      rl.question(questions[3], (meal) => {
        rl.question(questions[4], (favToeatInMeal) => {
          rl.question(questions[5], (sports) => {
            rl.question(questions[6], (amazingAt) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${favToeatInMeal} for ${meal}, prefers ${sports} over any other sport, and is amazing at ${amazingAt}.`)
              rl.close()
            });
          });
        });
      });
    });
  });
});







