let numberList = [];

function addNumber() {
  const numberInput = document.getElementById('numberInput');
  const number = parseInt(numberInput.value);

  if (!isNaN(number)) {
    numberList.push(number);
    numberInput.value = '';
  } else {
    alert('Please enter a valid number.');
  }

  showList();
}

function showList() {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Numbers: ${numberList.join(', ')}`;
}

function showMinimum() {
  const resultElement = document.getElementById('result');
  if (numberList.length > 0) {
    const minimum = Math.min(...numberList);
    resultElement.textContent = `Minimum: ${minimum}`;
  } else {
    resultElement.textContent = 'List is empty.';
  }
}

function showMaximum() {
  const resultElement = document.getElementById('result');
  if (numberList.length > 0) {
    const maximum = Math.max(...numberList);
    resultElement.textContent = `Maximum: ${maximum}`;
  } else {
    resultElement.textContent = 'List is empty.';
    }
}