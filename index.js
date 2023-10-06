function receivesAFunction(callback) {
    callback();
}



function returnsANamedFunction() {
    return function hello() {console.log("Hi")};
}

function returnsAnAnonymousFunction() {
    return () => {console.log("hi")}
}
