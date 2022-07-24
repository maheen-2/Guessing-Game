//parseInt make sure that the user only enter a number in the prompt.
//it prevents the user from writing NaN. If he writes NaN will appear in the console.
//Right now maximum number is just a number since we hevent specified its limit.
let maximum = parseInt(prompt("Enter the maximum number!"));
//until unless the user type a number, 'enter the valid number!' will keep on appearing.
//0 is considered falsy.
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}
//multiply the random no. with maximum number and then chop the decimal off and then add1.
//make it a var then to be used alter.
const targetNum = Math.floor(Math.random() * maximum) + 1;
//To amke it a game, what we want is to ask u to make a guess! And then as long as that guess is too high or too low, we r going to tell the user that it's incorrect.
let guess = parseInt(prompt("Enterr ur first guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Ur guess is too high! Try again!")
    } else {
        guess = prompt("Ur guess is too low! Try again!")
    }
}
if (guess === 'q') {
    console.log("YOU QUIT!")
} else {
    //Now its almost done, u just need to tell the user how much guesses they made. for that add $ and define attempts var and its increment.
    console.log(`U got It!! Bravo!! You made ${attempts} guesses.`);
}
//js is too tough! I gonna die!!!!
