let number1 = '';
let number2 = '';
let operator = '';
const buttons = document.querySelectorAll('.btn');

const addEventListenerstoButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (
        ['+', '-', '*', '/'].includes(button.textContent) &&
        number1
      ) {
        operator = button.textContent;
        return updateDisplay(operator);
      }
      if (button.textContent === '=' && number1 && number2) {
        // operator = button.textContent;
        return updateDisplay(
          operate(parseInt(number1), operator, parseInt(number2))
        );
      }
      if (button.textContent === 'AC') {
        return clearDisplay();
      }

      if (!operator) {
        number1 = number1 + button.textContent;
        updateDisplay(number1);
      }

      if (operator && number1) {
        number2 += button.textContent;
        updateDisplay(number2);
      }

      //   if (operator === '=') {
      //     // console.log('Operate');
      //     updateDisplay(number1 + number2);
      //   }
    });
  });
};

const updateDisplay = (value) => {
  document.getElementById('display').textContent = value;
};

const clearDisplay = () => {
  number1 = '';
  number2 = '';
  operator = '';
  document.getElementById('display').textContent = '0';
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) return 'ERROR';
  return a / b;
};

const operate = (n1, operator, n2) => {
  //   return `${n1} ${operator} ${n2}`;
  if (operator === '+') return add(n1, n2);
  if (operator === '-') return subtract(n1, n2);
  if (operator === '*') return multiply(n1, n2);
  if (operator === '/') return divide(n1, n2);
};

addEventListenerstoButtons();
// console.log(operate(number1, operator, number2));
