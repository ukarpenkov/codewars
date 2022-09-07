



function chain(v, fns) {
    return fns.reduce(function (v, fn) { return fn(v) }, v);
}
chain(2, [add, mult])


// debugger
// arguments[1] = input
// fs[1] = function add(input) {
//     let add1 = input + 1;
//     return add1
// }



// fs[2] = function mult(add1) {
//     console.log(add1 * 30)
//     return add1 * 30;
// }

// function resultFunc() {
//     fs['1']()
//     fs['2']()
// }

// resultFunc()
