// Actual lab functions


// Callback function
const spy = () => console.log("I am a spy");

function receivesAFunction(spy) {
    return spy();
}

console.log(receivesAFunction(spy));

// Function returning named function
function returnsANamedFunction() {
    const fn = () => console.log("I am a named function");
    return fn;
}

console.log(returnsANamedFunction()());

// Function returning anonymous function
function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function");
}

console.log(returnsAnAnonymousFunction()());



// Exercise functions from lab walkthrough

function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights() {
    console.log('Pump iron');
}

function swimFortyLaps() {
    console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}
  
function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}
  
function Wednesday() {
    exerciseRoutine(runFiveMiles);
}
  
function Thursday() {
    exerciseRoutine(liftWeights);
}
  
function Friday() {
    exerciseRoutine(() => console.log('Stretch! Work that core!'));
}

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
        breakfast = 'kale smoothie';
    } else {
        breakfast = 'granola';
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
}

const afterExercise = morningRoutine(liftWeights);

console.log(afterExercise());