// a functional declaration (can be used BEFORE and AFTER its declaration in a code):

function isEven(x) {
  return (x % 2) === 0
}

console.log(isEven(4));


// a functional expression (can be used further in a code only AFTER its declaration):

const isEven2 = function (x) {
  return (x % 2) === 0;
};

/* Arrow function -
can be simplified to "const isEven2 = (x) => return (x % 2) === 0;"(removing the curly brackets)
and 
"const isEven2 = x => return (x % 2) === 0;"(removing the parantheses as well).*/

const isEven3 = (x) => {
  return (x % 2) === 0;
}

let x = 15;
document.write(isEven3(x));