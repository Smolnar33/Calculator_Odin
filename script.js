let currentValue = 0;
let previusValue = null;
let operator = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

const addEventListenerstoButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const btnValue = button.textContent;
      if (['+', '-', '*', '/'].includes(btnValue) && operator) {
        operator = btnValue;
        return updateDisplay(operator);
      }
      if (btnValue === 'AC') {
        currentValue = 0;
        previusValue = null;
        operator = null;
        return updateDisplay(currentValue);
      } else if (btnValue === '+/-') {
        currentValue = (parseFloat(currentValue) * -1).toString();
        updateDisplay(currentValue);
      } else if (btnValue === '%') {
        currentValue = (parseFloat(currentValue) / 100).toString();
        updateDisplay(currentValue);
      } else if (['+', '-', '*', '/'].includes(btnValue)) {
        operator = btnValue;
        previousValue = currentValue;
        currentValue = 0;
        updateDisplay(operator);
      } else if (btnValue === '=') {
        if (operator && previousValue !== null) {
          currentValue = operate(
            previousValue,
            operator,
            currentValue
          ).toString();
          operator = null;
          previousValue = null;
          updateDisplay(currentValue);
        }
      } else if (btnValue === '.') {
        if (!currentValue.includes('.')) {
          currentValue += '.';
          updateDisplay(currentValue);
        }
      } else {
        if (currentValue === '0') {
          currentValue = btnValue;
        } else {
          currentValue = parseFloat(
            currentValue + btnValue
          ).toString();
        }
        updateDisplay(currentValue);
      }
    });
  });
};

const updateDisplay = (value) => {
  display.textContent = value;
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
  if (operator === '+') return add(parseFloat(n1), parseFloat(n2));
  if (operator === '-')
    return subtract(parseFloat(n1), parseFloat(n2));
  if (operator === '*')
    return multiply(parseFloat(n1), parseFloat(n2));
  if (operator === '/') return divide(parseFloat(n1), parseFloat(n2));
};

addEventListenerstoButtons();
