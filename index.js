//receivesAFunction

function swimOneMile() {
    console.log("Go for a one-mile swim");
  }
  
  function benchPress() {
    console.log("Pump iron");
  }
  
  function Monday() {
    swimOneMile();
    benchPress();
  }
  
  function receivesAFunction(postSwimActivity) {
    swimOneMile();
    postSwimActivity();
  }
  
  function Monday() {
    exerciseRoutine(benchPress);
  }
  
  function receivesAFunction(postSwimActivity) {
    swimOneMiles();
    postSwimActivity();
  }
  
  Monday()

//returnsANamedFunction


//returnsAnAnonymousFunction

function returnsAnAnonymousFunction(exercise) {
    let dinner;
  
    if (exercise === benchPress) {
      dinner = "protein bar";
    } else if (exercise === swimOneMile) {
      dinner = "salmon";
    } else {
      dinner = "rice";
    }
  
    returnsAnAnonymousFunction(exercise);

    return function () {
      console.log(`Wow, this ${dinner} is delicious!`);
    };
  }
  
