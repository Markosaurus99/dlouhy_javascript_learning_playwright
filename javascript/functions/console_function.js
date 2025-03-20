function logHelloWorld() {
  console.log("--------------------");
  console.log("Čuuuus světe!");
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();

function logText(textParameter) {
  // ? parametry používáma jako jiné proměnné
  console.log(`20.03.2025 18:15 [INFO] ${textParameter}`);
}

logText("Programujeme v JavaScriptu!");
const argument = "Playwright je boží!";
logText(argument);
