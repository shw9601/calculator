const digits = "1234567890";


function add(first, second) {
    return parseInt(first) + parseInt(second);
}

function subtract(first, second) {
    return parseInt(first) - parseInt(second);
}


function multiply(first, second) {
    return parseInt(first) * parseInt(second);
}

function divide(first, second) {
    return parseInt(first) / parseInt(second);
}

function operate(first, operator, second) {
    let result = 0;
    if (operator === "+") {
        result = add(first, second);
    }
    else if (operator === "-") {
        result = subtract(first, second);
    }
    else if (operator === "*") {
        result = multiply(first, second);
    }
    else {
        result = divide(first, second);
    }

    return result;
}




const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
}));
buttons.forEach(button => button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "darkGrey";
}));

const expression = {
    first: "0",
    operator: "",
    second: ""
};


function updateDisplay() {
    let displayString = expression.first + " " + expression.operator + " " + expression.second;
    let display = document.querySelector("#display");
    display.textContent = displayString;
}

updateDisplay();

function addToExpression(newChar) {
    if (digits.includes(newChar)) {
        if (expression.operator === "") {
            if (expression.first === "0") {
                expression.first = newChar;
            }
            else {
                expression.first = expression.first + newChar;
            }
        }
        else {
            expression.second = expression.second + newChar;
        }
    }
    else {
        expression.operator = newChar;
    }

    updateDisplay();
}

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    addToExpression("0");
})
const one = document.querySelector("#one");
one.addEventListener("click", () => {
    addToExpression("1");
});
const two = document.querySelector("#two");
two.addEventListener("click", () => {
    addToExpression("2");
});
const three = document.querySelector("#three");
three.addEventListener("click", () => {
    addToExpression("3");
});
const four = document.querySelector("#four");
four.addEventListener("click", () => {
    addToExpression("4");
});
const five = document.querySelector("#five");
five.addEventListener("click", () => {
    addToExpression("5");
});
const six = document.querySelector("#six");
six.addEventListener("click", () => {
    addToExpression("6");
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    addToExpression("7");
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    addToExpression("8");
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    addToExpression("9");
});



const AC = document.querySelector("#AC");
AC.addEventListener("click", () => {
    expression.first = "0";
    expression.operator = "";
    expression.second = "";
    updateDisplay();
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    addToExpression("+");
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    addToExpression("-");
});
const times = document.querySelector("#multiply");
times.addEventListener("click", () => {
    addToExpression("*");
});
const divided = document.querySelector("#divide");
divided.addEventListener("click", () => {
    addToExpression("/");
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    expression.first = operate(expression.first, expression.operator, expression.second);
    expression.operator = "";
    expression.second = "";
    updateDisplay();
});