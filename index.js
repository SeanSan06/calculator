let firstOperand = "";
let secondOperand = "";
let operation = "";

firstOperandActive = true;

const q_screen_area = document.querySelector("#screen-area");

// Clear and delete
const q_clear = document.querySelector("#clear");
q_clear.addEventListener("click", function() {
    q_screen_area.textContent = "";
});


const q_delete = document.querySelector("#delete");
q_delete.addEventListener("click", function() {
    if(firstOperandActive === true) {

    }
});


// Numbers 0-9
const q_zero = document.querySelector("#zero");
q_zero.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "0";
    } else {
        secondOperand += "0";
    }

    q_screen_area.textContent += "0";
});

const q_one = document.querySelector("#one");
q_one.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "1";
    } else {
        secondOperand += "1";
    }

    q_screen_area.textContent += "1";
});

const q_two = document.querySelector("#two");
q_two.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "2";
    } else {
        secondOperand += "2";
    }

    q_screen_area.textContent += "2";
});

const q_three = document.querySelector("#three");
q_three.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "3";
    } else {
        secondOperand += "3";
    }

    q_screen_area.textContent += "3";
});

const q_four = document.querySelector("#four");
q_four.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "4";
    } else {
        secondOperand += "4";
    }

    q_screen_area.textContent += "4";
});

const q_five = document.querySelector("#five");
q_five.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "5";
    } else {
        secondOperand += "5";
    }

    q_screen_area.textContent += "5";
});

const q_six = document.querySelector("#six");
q_six.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "6";
    } else {
        secondOperand += "6";
    }

    q_screen_area.textContent += "6";
});

const q_seven = document.querySelector("#seven");
q_seven.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "7";
    } else {
        secondOperand += "7";
    }

    q_screen_area.textContent += "7";
});

const q_eight = document.querySelector("#eight");
q_eight.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "8";
    } else {
        secondOperand += "8";
    }

    q_screen_area.textContent += "8";
});

const q_nine = document.querySelector("#nine");
q_nine.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperand += "9";
    } else {
        secondOperand += "9";
    }

    q_screen_area.textContent += "9";
});

// Operators
const q_equal = document.querySelector("#equal");
q_equal.addEventListener("click", function() {
    if(firstOperandActive === false) {
        if(operation === "+") {
            q_screen_area.textContent = parseInt(firstOperand) + parseInt(secondOperand);
            firstOperand = parseInt(firstOperand) + parseInt(secondOperand);
        } else if(operation === "-") {
            q_screen_area.textContent = parseInt(firstOperand) - parseInt(secondOperand);
            firstOperand = parseInt(firstOperand) - parseInt(secondOperand);
        } else if(operation === "*") {
            q_screen_area.textContent = parseInt(firstOperand) * parseInt(secondOperand);
            firstOperand = parseInt(firstOperand) * parseInt(secondOperand);
        } else if(operation === "/") {
            q_screen_area.textContent = parseInt(firstOperand) / parseInt(secondOperand);
            firstOperand = parseInt(firstOperand) / parseInt(secondOperand);
        }

        secondOperand = "";
        operation = "";
        firstOperandActive = true;
    }

});

const q_dot = document.querySelector("#dot");
q_dot.addEventListener("click", function() {
    if(firstOperandActive === true) {
        
    }
});

const q_plus = document.querySelector("#plus");
q_plus.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperandActive = false;
        
        operation = "+";
    }

    q_screen_area.textContent += " + ";
});

const q_minus = document.querySelector("#minus");
q_minus.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperandActive = false;

        operation = "-";
    }

    q_screen_area.textContent += " - ";
});

const q_asteriks = document.querySelector("#asteriks");
q_asteriks.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperandActive = false;

        operation = "*";
    }

    q_screen_area.textContent += " * ";
});

const q_backward_slash = document.querySelector("#backward-slash");
q_backward_slash.addEventListener("click", function() {
    if(firstOperandActive === true) {
        firstOperandActive = false;

        operation = "/";
    }

    q_screen_area.textContent += " / ";
});
