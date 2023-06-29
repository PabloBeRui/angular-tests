import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class KarmaJasmineService {
  constructor() {}

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }

  // numPar(x: number): string {
  //   const y = x % 2;
  //   if (y === 0) {
  //     return "es par";
  //   } else {
  //     return "es impar";
  //   }
  // }
  numPar(x: number): string {
    return x % 2 === 0 ? "es par" : "es impar";
  }
  esPalindromo(cadena: string): string {
    const cadenaNormalizada = cadena.replace(/[\W_]/g, "").toLowerCase();
    const cadenaReversa = cadenaNormalizada.split("").reverse().join("");
    return cadenaNormalizada === cadenaReversa
      ? "Es palindromo"
      : "No es palindromo";
  }

  // *****************************************************************************************************************************************************
  //   En este caso, la expresión regular [\W_] está buscando dos tipos de caracteres en la cadena de texto:

  // \W: Este es un carácter especial que coincide con cualquier carácter que no sea una letra, un número o un guion bajo. En términos de expresiones regulares, se llama un "shorthand character" y representa el mismo conjunto de caracteres que [^a-zA-Z0-9_].

  // _: Este es simplemente el carácter de guion bajo.

  // Entonces, [\W_] coincide con cualquier carácter que no sea una letra, un número o un guion bajo, o que sea un guion bajo.

  // El /g al final es un "flag" que significa "global". Esto significa que la expresión regular buscará todos los caracteres que coincidan en toda la cadena de texto, en lugar de sólo el primero que encuentre.

  // Entonces, cadena.replace(/[\W_]/g, '') está reemplazando todos los caracteres en la cadena de texto que no sean letras, números, o que sean guiones bajos, con nada
  // *****************************************************************************************************************************************************

  factorial(n: number): any {
    if (n < 0) {
      return "El factorial no está definido para números negativos";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  //**any */

  maxNum(a: number, b: number): number | string {
    if (a === b) {
      return "son iguales";
    } else if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  upperString(a: string): string {
    return a.toUpperCase();
  }
  primeNumber(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  // Función para verificar si un número es positivo
  isPos(a: number): string {
    return a >= 0 ? "Es positivo" : "Es negativo";
  }
  // Función para obtener el número de elementos en un array
  arrayLength(a: any[]): number {
    return a.length;
  }
  // Función para verificar si una cadena contiene un substring
  substringContent(a: string, b: string): string {
    return a.includes(b) ? "incluye un substring" : "no incluye un substring";
  }
  // Función para obtener el promedio de un array de números
  arrayAvg(x: number[]): string {
    return (x.reduce((a, b) => a + b, 0) / x.length).toFixed(2);
  }
  // Función para convertir una cadena en un array de caracteres
  stringToCArray(a: string): string[] {
    return a.split("");
  }
  // Función para calcular la suma de los dígitos de un número
  sumDig(a: number): number {
    let sum = 0;
    const digits = a.toString().split("");
    for (const digit of digits) {
      sum += parseInt(digit);
    }
    return sum;
  }

  // Función para verificar si una cadena es un anagrama de otra(mismas letras pero distintas posiciones)
  anagram(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }

    const sortA = a
      .toLowerCase()
      .replace(/ +/g, "")
      .split("")
      .sort()
      .toString();
    const sortB = b
      .toLowerCase()
      .replace(/ +/g, "")
      .split("")
      .sort()
      .toString();

    return sortA === sortB;
  }

  // Función para encontrar el número duplicado en un array de números:

  repeatedNum(a: number[]): number | string {
    const numCount: number[] = [];

    for (const num of a) {
      if (numCount.includes(num)) {
        return `El número repetido es ${num}`;
      }
      numCount.push(num);
    }

    return "No hay ningún número duplicado";
  }

  // Función para calcular el número de días entre dos fechas:

  totalDays(a: Date, b: Date): number {
    if (b.getTime() >= a.getTime()) {
      return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      return Math.ceil((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
    }
  }
}
