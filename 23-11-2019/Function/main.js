// es5 function
function addition(a, b) {
  return a + b;
}

// console.log(addition(5, 18));

// es6 function

multiply = (a, b) => {
  return a * b;
};

// console.log(multiply(25, 15));

// check age between 1 to 18
function checkAge(age) {
  switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      alert ('You are a kid');                                
    case 18:
      alert ('You are adult now');
      break;
  
    default:
      alert ('You have given me a wrong input');
      break;
  }
}

// checkAge(256);

/* Task */
// make a es6 function
// input age between 1 to 100 or more.
// if age is between 1 to 17 return you are a kid.
// if age is between 18 - 39 return you are adult.
// if age is more then 40 or 40 return you are old.
// make this task in if else statement.
