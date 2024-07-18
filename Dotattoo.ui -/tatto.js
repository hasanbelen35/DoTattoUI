const buttons = document.querySelectorAll(".links button");
const tattosBoxes = document.querySelectorAll(".tattos-box");

const numberOfBoxesToShow = [
  5, 4, 3 
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tattosBoxes.forEach((box) => {
      box.style.display = "none";
    });

    for (let i = 0; i < numberOfBoxesToShow[index]; i++) {
      tattosBoxes[i].style.display = "flex"; 
    }
  });
});
