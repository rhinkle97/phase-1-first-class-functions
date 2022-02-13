const { spy } = require("chai");


function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    receivesAFunction()
}