
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