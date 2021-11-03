function receivesAFunction(add) {
    return add();
}

function returnsANamedFunction() {
    return function subtract() {
        console.log(8 - 2);
    }
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log('This function has no name!')
    }
}