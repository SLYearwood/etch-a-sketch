createGrid();

function createGrid (gridSize = 16) {
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
    value.classList.add("hovering");
  })
})
};

function changeGridSize () {
  let newGridSize = prompt("How many squares would you like? Max 100!")
  while (newGridSize > 100 || newGridSize < 1 || isNaN(newGridSize)) {
    if (newGridSize === null) return;
    newGridSize = prompt("Max grid size exceeded, enter a new number. Max 100!")
  }
  const container = document.querySelector(".container");
  
  createGrid(Number(newGridSize));
}

const changeButton = document.querySelector(".change-button");
changeButton.addEventListener("click", changeGridSize);





