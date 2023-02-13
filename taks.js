function f1() {
    debugger
    return this.count || null;
}

const f2 = () => {
    debugger
    return this.count || null;
}

function bar() {

    this.count = 1;
    this.f1 = f1;
    this.f2 = f2;
}

const b = new bar();
console.log(b.f1());
console.log(b.f2());