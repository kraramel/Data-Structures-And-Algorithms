
//This is a solution among others
function reverse(str){
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'that\'s not good';
    }

    const backwards = [];
    const lastItem = str.length - 1;
    for (let i = lastItem; i >= 0 ; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');  
}

// This is a more cleaner solution
// Split() : take as an input a string and return an array
// reverse() : method that can reverse an array
// join() : take as an input an array and make it a string
// All of these methods are pre-builded in JavaScript
function reverse2(str) {
    return str.split('').reverse().join('');
}

// We can also use a one-line function with arrow functions (ES6)
const reverse3 = str => str.split('').reverse().join('');


// reverse('hello');
// reverse2('Hello you');
// reverse3('Hello stranger');
