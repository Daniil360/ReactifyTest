
var foo = 1
function bar() {
    if (!foo) {
        var foo = 100
    }

    console.log(foo);
}

bar()

