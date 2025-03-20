// ? Toto je konstantní fce, která se skládá z konstanty a šipkové funkce
const logText = (textParameter) => {
  // ? Parametry jakoby šipkou posíláme do bloku kódu
  console.log(`20.03.2025 18:15 [INFO] ${textParameter}`);
};

logText("Programujeme v JavaScriptu!");
const argument = "Playwright je boží!";
logText(argument);
