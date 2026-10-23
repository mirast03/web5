// ===== Task 5. Mouse Events =====
const hoverBox = document.getElementById("hoverBox");

const normalColor = "lightblue";
const hoverColor = "orange";

hoverBox.style.backgroundColor = normalColor;

// Mouse is over the box -> change color
hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = hoverColor;
});

// Mouse leaves the box -> restore the original color
hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = normalColor;
});


// ===== Task 6. Keyboard Events =====
const typeInput = document.getElementById("typeInput");
const typedText = document.getElementById("typedText");

// After every key release show the current value of the input
typeInput.addEventListener("keyup", function () {
  typedText.textContent = typeInput.value;
});


// ===== Task 7. Calculator =====
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcResult = document.getElementById("calcResult");

function calculate(operation) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  // Both fields must contain numbers
  if (isNaN(a) || isNaN(b)) {
    calcResult.textContent = "Please enter two numbers";
    return;
  }

  let answer;

  if (operation === "+") {
    answer = a + b;
  } else if (operation === "-") {
    answer = a - b;
  } else if (operation === "*") {
    answer = a * b;
  } else if (operation === "/") {
    if (b === 0) {
      calcResult.textContent = "Cannot divide by zero";
      return;
    }
    answer = a / b;
  }

  // toFixed removes errors like 0.1 + 0.2 = 0.30000000000000004
  calcResult.textContent = parseFloat(answer.toFixed(10));
}

document.getElementById("addBtn").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subtractBtn").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divideBtn").addEventListener("click", function () {
  calculate("/");
});
