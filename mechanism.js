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

    console.log(result);
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