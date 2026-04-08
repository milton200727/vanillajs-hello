import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  // Las listas de palabras para construir la excusa
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising'];

  // Elegimos un elemento al azar de cada lista
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Juntamos todas las partes en una sola frase
  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  // Ponemos la excusa en el HTML
  document.getElementById("excuse").innerHTML = excuse;

};
