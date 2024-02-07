let currentValue = '';
let currentOperator = '';
let previousValue = '';

function appendNumber(number) {
  currentValue = currentValue.toString() + number.toString();
  updateDisplay();
}

function appendOperator(operator) {
  currentOperator = operator;
  previousValue = currentValue;
  currentValue = '';
  updateDisplay();
}

function calculate() {
  let result;
  switch (currentOperator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
  }
  currentValue = result.toString();
  currentOperator = '';
  previousValue = '';
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  currentOperator = '';
  previousValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentValue || '0'; // Ensure the display is not empty
}
