const dieButton = document.getElementById("dieButton");
const diceContainer = document.getElementById("dice-container");
const rollButton = document.getElementById("rollButton");
const valueButton = document.getElementById("valueButton");
let diceArr = [];

valueButton.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < diceArr.length; i++) {
    sum += diceArr[i].value;
  }
  alert(`${sum}`);
});

dieButton.addEventListener("click", () => new Die());

rollButton.addEventListener("click", () => {
  diceArr.forEach((die) => die.roll());
});

const randomNum = () => Math.floor(Math.random() * 7);
class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "die";
    diceContainer.appendChild(this.div);
    this.roll();
    diceArr.push(this);

    this.div.addEventListener("dblclick", () => {
        this.div.remove();
        const i = diceArr.indexOf(this);
        diceArr.splice(i,1)
        
    })

    this.div.addEventListener("click", () => {
      this.roll();
    });
  }

  roll() {
    this.value = randomNum();
    this.div.textContent = this.value;
  }
}
