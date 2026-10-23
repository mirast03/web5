// ===== Task 2. Changing Content =====
const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text was changed with JavaScript!";
});


// ===== Task 3. Changing Styles =====
const styleBox = document.getElementById("styleBox");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeSizeBtn = document.getElementById("changeSizeBtn");

const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "white"];
const sizes = ["22px", "30px", "40px", "16px"]; // the last one is the normal size
let colorIndex = 0;
let sizeIndex = 0;

// Each click takes the next color from the array
changeColorBtn.addEventListener("click", function () {
  styleBox.style.backgroundColor = colors[colorIndex];
  colorIndex = colorIndex + 1;
  if (colorIndex === colors.length) {
    colorIndex = 0; // go back to the first color
  }
});

// Each click takes the next font size from the array
changeSizeBtn.addEventListener("click", function () {
  styleBox.style.fontSize = sizes[sizeIndex];
  sizeIndex = sizeIndex + 1;
  if (sizeIndex === sizes.length) {
    sizeIndex = 0; // go back to the first size
  }
});


// ===== Task 4. Creating & Removing Elements =====
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

// Add a new <li> to the end of the list
addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
});

// Remove the last <li> (only if the list is not empty)
removeItemBtn.addEventListener("click", function () {
  const lastItem = itemList.lastElementChild;
  if (lastItem !== null) {
    itemList.removeChild(lastItem);
  }
});
