// conditionals
const checkStage = (stageNumber) => {
    if (stageNumber === 1) {
        return "Nudge";
    } else if (stageNumber === 2) {
        return "Check-In";
    } else if (stageNumber === 3) {
        return "Alert";
    } else {
      return "Unknown Stage";
    }
};

console.log(checkStage(2));
console.log(checkStage(5));

const checkAge = (Age) => {
    if (Age < 13) {
        return "Child";
    } else if (Age >= 13 && Age <= 19) {
        return "Teen";
    } else {
        return "Adult";
    }
};

console.log(checkAge(9));
console.log(checkAge(17));
console.log(checkAge(35));

//loops
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let count = 0;
while (count < 3) {
    console.log("Count is:" + count);
    count++;
}

let secretNumber = 7;
const guesses = [3, 9, 7, 2];

for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] < secretNumber) {
        console.log("Too Low");
    } else if (guesses[i] > secretNumber) {
        console.log("Too High");
    } else {
        console.log("Correct!");
    }
}
