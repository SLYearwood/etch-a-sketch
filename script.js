let gridSize = 16;
createGrid();

function createGrid () {
  const container = document.querySelector(".container");
  container.innerHTML = '';
  const squareSize = 1000 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const div = document.createElement("div");
      div.classList.add("column")
      div.style.height = `${squareSize}px`;
      div.style.width = `${squareSize}px`;
      container.appendChild(div);
    }
  
    const squares = document.querySelectorAll(".column");
    squares.forEach((value) => {
    value.addEventListener("mouseenter", () => {
      value.style.opacity = Math.min((parseFloat(value.style.opacity) || 0) + 0.1, 1);
      value.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  })
})
};

function changeGridSize () {
  gridSize = prompt("How many squares would you like? Max 100!")
  while (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
    if (gridSize === null) return;
    gridSize = prompt("Max grid size exceeded, enter a new number. Max 100!")
  }
  const container = document.querySelector(".container");
  
  createGrid();
}

const changeButton = document.querySelector(".change-button");
changeButton.addEventListener("click", changeGridSize);

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = '';
  createGrid();
})




