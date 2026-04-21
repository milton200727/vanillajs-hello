import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = [
  { symbol: "♥", color: "red",   name: "Corazones" },
  { symbol: "♦", color: "red",   name: "Diamantes" },
  { symbol: "♠", color: "black", name: "Picas"     },
  { symbol: "♣", color: "black", name: "Tréboles"  }
];

const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function generateCard() {
  const suit  = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  document.querySelector("#app").innerHTML = `
    <p id="card-label">${value} de ${suit.name}</p>
    <div class="playing-card">
      <div class="corner ${suit.color}">
        <div>${value}</div>
        <div>${suit.symbol}</div>
      </div>
      <div class="center-symbol ${suit.color}">${suit.symbol}</div>
      <div class="corner bottom ${suit.color}">
        <div>${value}</div>
        <div>${suit.symbol}</div>
      </div>
    </div>
    <button class="btn-card" onclick="generateCard()">🃏 Nueva carta</button>
  `;
}

window.generateCard = generateCard;

window.onload = generateCard;
