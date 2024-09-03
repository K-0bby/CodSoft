'use strict'

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let previousValue = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value == 'AC') {
            currentValue = '';
            previousValue = '';
            operator = '';
            screen.textContent = '0';
        } else if (value === '+/-') {
            currentValue = currentValue ? String(-parseFloat(currentValue)): '';
            screen.textContent = currentValue;
        } else if (value === '%') {
            currentValue = currentValue ? String(parseFloat(currentValue) / 100): '';
            screen.textContent = currentValue;
        } else if (value === '÷' || value === '+' || value === '-' || value === 'X') {
            if (currentValue) {
                previousValue = currentValue;
                currentValue = '';
                operator = value;
            }
        } else if (value === '='){
            if (currentValue && previousValue && operator) {
                const currentNumber = parseFloat(currentValue);
                const previousNumber = parseFloat(previousValue);
                let result = 0;

                console.log(`Calculating: ${previousNumber} ${operator} ${currentNumber}`);
                
                switch (operator) {
                    case '+':
                        result = previousNumber + currentNumber;
                        break;
                    case '-':
                        result = previousNumber - currentNumber;
                        break;
                    case 'X': 
                    result = previousNumber * currentNumber;
                        break;
                        case '÷':
                        result = previousNumber / currentNumber;
                        break;
                }
                console.log(result)

                screen.textContent = result;
                currentValue = String(result);
                previousValue = '';
                operator = '';
            }
        }   else {
            if (value === '.' && currentValue.includes('.')) return;
            currentValue += value;
            screen.textContent = currentValue;
        }
    })
})