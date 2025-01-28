let displayValue = '';

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString(); // Safely evaluates expressions
    updateDisplay();
  } catch {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue || '0';
}
