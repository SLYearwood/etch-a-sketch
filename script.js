createGrid();

function createGrid () {
  const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
      const div = document.createElement("div");
      div.classList.add("row")
      container.appendChild(div);
    }
    const row = document.querySelectorAll('.row');
    row.forEach((value) => {
      for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("column")
        value.appendChild(div);
      }
      
    })
};


const squares = document.querySelectorAll(".column");
squares.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    value.classList.add("hovering");
  })
  value.addEventListener("mouseleave", () => {
    value.classList.remove("hovering");
  })
})



