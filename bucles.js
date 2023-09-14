/* 
  1.-
  Imprimir impares 1-20 Usando un bucle, 
  escribe un código que haga que console.log
  imprima todos los valores impares del 1 al 20.
*/
function imprimirImpares () {
  const maxCiclos = 20
  // ciclo for: 
  for (let i = 1; i <= maxCiclos; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }

  // ciclo while:
  let x = 1;
  while (x <= maxCiclos) {
    if (x % 2 !== 0) {
      console.log(x)
    }
    x++
  }
  // no es necesario crear la variable maxCiclos
  // pero para hacerlo un poco mas visual lo deje asi
}

/* 
  2.-
  Disminuir múltiplos de 3 Usando un bucle, 
  escribe un código que haga que console.log
  imprima todos los valores que sean divisibles 
  de manera uniforme por 3 del 100 al 0.
*/

function multiplosDeTres () {
  const minNumber = 0
  // ciclo for:
  for (let i = 100; i >= minNumber; i--) {
    if (i % 3 === 0) {
      console.log(i)
    }
  }

  // ciclo while:
  let x = 100
  while (x >= minNumber) {
    if (x % 3 === 0) {
      console.log(x)
    }
    x--
  }
}

/* 
  3.-
  Imprime la secuencia Usando un bucle, 
  escribe un código que haga que console.log 
  imprima los valores en esta secuencia  
  4, 2.5, 1, -0.5, -2, -3.5.
*/

function imprimirSecuencia () {
  const minNumber = -4
  for (let i = 4; i >= minNumber; i -= 1.5) {
    console.log(i)
  }

  let x = 4
  while (x >= minNumber) {
    console.log(x)
    x -= 1.5
  }
}


/* 
  4.-
  Sigma Escribe código que sume todos los valores del 1 al 100 
  en una variable sum y, al final, console.log
  dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100.
  Deberíamos obtener 5050 al final.
*/ 

function sigma () {
  const maxNumber = 100
  let counter = 0
  for (let i = 1; i <= maxNumber; i++) {
    counter += i
  }
  console.log(counter)

  let counter2 = 0
  let x = 0
  while (x <= maxNumber) {
    counter2 += x
    x++
  }
  console.log(counter2)
}

/* 
  5.- 
  Factorial Escribe código que multiplique 
  todos los valores del 1 al 12 en una variable producty, 
  al final, console.logdé como resultado 
  1 * 2 * 3 * ... * 10 * 11 * 12. 
  Deberíamos obtener  479001600al final.
*/

function factorial () {
  let fact = 1;
  const maxNumber = 12
  for (let i = 1; i <= maxNumber; i++) {
    fact *= i
  }
  console.log(fact)

  let fact2 = 1
  let x = 1
  while (x <= maxNumber) {
    fact2 *= x
    x++
  }
  console.log(fact2)
}
// ejecuciones 

// 1.-
imprimirImpares()

// 2.-
multiplosDeTres()

// 3.-
imprimirSecuencia()

// 4.-
sigma()

// 5.-
factorial()