const generateRandomNumber = (min, max) => {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

// console.log(generateRandomNumber(0, 10));

export {generateRandomNumber};