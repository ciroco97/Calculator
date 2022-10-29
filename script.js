const upperDisplay = document.getElementById("upperDisplay");
const bottomDisplay = document.getElementById("bottomDisplay");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const clear = document.getElementById("clear");
const delet = document.getElementById("delete");
const potential = document.getElementById("potential");
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");
const substract = document.getElementById("substract");
const sum = document.getElementById("sum");
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
let holder = "";
let holderbis = 0;
let holderbisbis = 0;
let sign;


/*const botones = Array.from(document.querySelectorAll(".button"));

botones.forEach(() => {
        this.addEventListener("click", () => {
        upperDisplay.innerText = this.innerText;
    })})*/

one.addEventListener("click", () => {
    upperDisplay.innerText = holder += 1;
    
});

two.addEventListener("click", () => {

    upperDisplay.innerText = holder += 2;

});

three.addEventListener("click", () => {
    upperDisplay.innerText = holder += 3;

});

four.addEventListener("click", () => {
    upperDisplay.innerText = holder += 4;
});

five.addEventListener("click", () => {
    upperDisplay.innerText = holder += 5;
});

six.addEventListener("click", () => {
    upperDisplay.innerText = holder += 6;
});

seven.addEventListener("click", () => {
    upperDisplay.innerText = holder += 7;
});

eight.addEventListener("click", () => {
    upperDisplay.innerText = holder += 8;
});

nine.addEventListener("click", () => {
    upperDisplay.innerText = holder += 9;
});

zero.addEventListener("click", () => {
    upperDisplay.innerText = holder += 0;
});

sum.addEventListener("click", () => {
    holderbis = (+holder);
    upperDisplay.innerText = holder + " +";
    holder = "";
    sign = "+";
});

substract.addEventListener("click", () => {
    holderbis = (+holder);
    upperDisplay.innerText = holder + " -";
    holder = "";
    sign = "-";
});

multiply.addEventListener("click", () => {
    holderbis = (+holder);
    upperDisplay.innerText = holder + " ×";
    holder = "";
    sign = "*";
});

division.addEventListener("click", () => {
    holderbis = (+holder);
    upperDisplay.innerText = holder + " /";
    holder = "";
    sign = "/";
});

potential.addEventListener("click", () => {
    upperDisplay.innerText = holder += "ª";
});

clear.addEventListener("click", () => {
    upperDisplay.innerText = holder = "";
    holderbis = "";
    holderbisbis = "";
    sign = "";
    bottomDisplay.innerText = "";
});

delet.addEventListener("click", () => {
    holder.split("");
    let del = holder.slice(0, holder.length - 1);
    holder = del;
    upperDisplay.innerText = holder;
});

dot.addEventListener("click", () => {
    upperDisplay.innerText = holder += ".";
});

equal.addEventListener("click", () => {
    holderbisbis = (+holder);
    let calculo = 0;
    if (sign === "+") {
    calculo = holderbis + holderbisbis;
    bottomDisplay.innerText = calculo;
    upperDisplay.innerText = `${holderbis} ${sign} ${holderbisbis}`;
    holder = calculo;
    holderbis = 0;
    holderbisbis = 0;
    } else if (sign === "-") {
        calculo = holderbis - holderbisbis;
        bottomDisplay.innerText = calculo;
        upperDisplay.innerText = `${holderbis} ${sign} ${holderbisbis}`;
        holder = calculo;
        holderbis = 0;
        holderbisbis = 0;
    } else if (sign === "/") {
        calculo = holderbis / holderbisbis;
        bottomDisplay.innerText = calculo.toFixed(2);
        upperDisplay.innerText = `${holderbis} ${sign} ${holderbisbis}`;
        holder = calculo;
        holderbis = 0;
        holderbisbis = 0;
    } else if (sign === "*") {
        calculo = holderbis * holderbisbis;
        bottomDisplay.innerText = calculo;
        upperDisplay.innerText = `${holderbis} ${sign} ${holderbisbis}`;
        holder = calculo;
        holderbis = 0;
        holderbisbis = 0;
    }
});