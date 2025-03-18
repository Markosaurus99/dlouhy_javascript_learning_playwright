let firstName = "Marek";
console.log(firstName);

firstName = "Markosaurus";
console.log(firstName);

console.log("Křestní jméno " + firstName);

let outside = "Venkovní Proměnná"; // proměnná vstupuje do bloku v tomto souboru
{
  console.log(outside);
  let inside = "Vnitřní Proměnná"; // Proměnná inside existuje pouze uvnitř bloku, mimo neexistuje
}
//console.log(inside); //! Chyba proměnná inside neexistuje mimo blok

//let firstName = "Novák" // Nejde udělat, proměnnou deklaruji pouze jednou u let

// Chování proměnné var
//! Var není doporučeno v nových programech, je zastaralá a může vést k chybě

{
  var insideVar = "Vnitřní var";
}
console.log(insideVar); // Proměnná var je možné použít i mimo blok

// Chování proměnné const

// const declaredConst; //! = pouze deklarace = Chyba const, musím vždycky inicializovat spolu s deklarací a navíc nejde měnit

//! const použiju když vím, že bude neměnná, let když budu měnit. Většinou použiju const
