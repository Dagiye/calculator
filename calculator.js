let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;
let display = document.querySelector('.display');
let operators = document.querySelectorAll('.operator');
let buttons = document.querySelectorAll('.containor div');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            display.textContent = '0';
        } else if (button.textContent === 'AC') {
            display.textContent = '0';
            num1 = 0;
            num2 = 0;
            operator = '';
        } else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
            num1 = parseFloat(display.textContent);
            operator = button.textContent;
            display.textContent = '0';
        } else if (button.textContent === '=') {
            num2 = parseFloat(display.textContent);
            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
            }
            display.textContent = result;
        } else {
            display.textContent += button.textContent;
        }
    });
});