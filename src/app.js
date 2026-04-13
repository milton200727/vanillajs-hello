function generarExcusa() {

  // Las listas de palabras
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising'];

  // Elegimos una palabra al azar de cada lista
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Juntamos todo en una frase
  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  // Mostramos la excusa en el cajón
  document.getElementById("excuse").innerHTML = excuse;
}
