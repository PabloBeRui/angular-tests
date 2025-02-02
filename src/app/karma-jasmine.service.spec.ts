import { TestBed } from "@angular/core/testing";
import { KarmaJasmineService } from "./karma-jasmine.service";

describe("KarmaJasmineService", () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("debería sumar dos números correctamente", () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it("debería sumar números negativos correctamente", () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it("debería sumar un número positivo y un número negativo correctamente", () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it("debería restar dos números correctamente", () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it("debería restar dos números correctamente", () => {
    const resultado = service.restar(3, 2);
    expect(resultado).toBe(1);
  });
  it("debería restar dos números correctamente", () => {
    const resultado = service.restar(1, 1);
    expect(resultado).toBe(0);
  });
  it("debería multiplicar dos números correctamente", () => {
    const resultado = service.multiplicar(1, 1);
    expect(resultado).toBe(1);
  });
  it("debería multiplicar dos números correctamente", () => {
    const resultado = service.multiplicar(1, 0);
    expect(resultado).toBe(0);
  });
  it("debería multiplicar dos números correctamente", () => {
    const resultado = service.multiplicar(1, 12);
    expect(resultado).toBe(12);
  });
  it("debería dividir dos números correctamente", () => {
    const resultado = service.dividir(1, 1);
    expect(resultado).toBe(1);
  });
  it("debería dividir dos números correctamente", () => {
    const resultado = service.dividir(10, 1);
    expect(resultado).toBe(10);
  });
  it("debería dividir dos números correctamente", () => {
    const resultado = service.dividir(1, 0);
    expect(resultado).toBe(Infinity);
  });

  it("el resultado debería ser par", () => {
    const resultado = service.numPar(2);
    expect(resultado).toBe("es par");
  });

  it("el resultado debería ser impar", () => {
    const resultado = service.numPar(3);
    expect(resultado).toBe("es impar");
  });
  it("El resultado tendría que ser un palíndromo", () => {
    const resultado = service.esPalindromo("caac");
    expect(resultado).toBe("Es palindromo");
  });
  it("El resultado no tendría que ser un palíndromo", () => {
    const resultado = service.esPalindromo("caballo");
    expect(resultado).toBe("No es palindromo");
  });
  it("El resultado del factorial indica que no puede ser un número negativo", () => {
    const resultado = service.factorial(-1);
    expect(resultado).toBe(
      "El factorial no está definido para números negativos"
    );
  });
  it("El resultado del factorial va a ser siempre 1", () => {
    const resultado = service.factorial(0);
    expect(resultado).toBe(1);
  });

  it("El resultado del factorial 8 es 40320", () => {
    const resultado = service.factorial(8);
    expect(resultado).toBe(40320);
  });
  it("El resultado de maxNum es 'son iguales'", () => {
    const resultado = service.maxNum(1, 1);
    expect(resultado).toBe("son iguales");
  });
  it("El resultado de maxNum es 2", () => {
    const resultado = service.maxNum(2, 1);
    expect(resultado).toBe(2);
  });
  it("El resultado de maxNum es 3", () => {
    const resultado = service.maxNum(1, 3);
    expect(resultado).toBe(3);
  });
  it("El resultado de  upperString es 'OLA K ASE'", () => {
    const resultado = service.upperString("ola k ase");
    expect(resultado).toBe("OLA K ASE");
  });
  it("El resultado de  primeNumber es true'", () => {
    const resultado = service.primeNumber(3);
    expect(resultado).toBeTruthy();
  });
  it("El resultado de  primeNumber es false'", () => {
    const resultado = service.primeNumber(1);
    expect(resultado).toBeFalsy();
  });

  it("El resultado de  primeNumber es false'", () => {
    const resultado = service.primeNumber(4);
    expect(resultado).toBeFalsy();
  });
  it("El resultado de  isPos es 'Es positivo' '", () => {
    const resultado = service.isPos(4);
    expect(resultado).toBe("Es positivo");
  });
  it("El resultado de  isPos es 'Es negativo' '", () => {
    const resultado = service.isPos(-4);
    expect(resultado).toBe("Es negativo");
  });
  it("El resultado de arrayLength es 3", () => {
    const resultado = service.arrayLength(["hola", "k", "ase"]);
    expect(resultado).toBe(3);
  });
  it("El resultado de arrayLength es 0", () => {
    const resultado = service.arrayLength([]);
    expect(resultado).toBe(0);
  });
  it("El resultado de substringContent es 'incluye un substring'", () => {
    const resultado = service.substringContent("hola hello", "hello");
    expect(resultado).toBe("incluye un substring");
  });
  it("El resultado de substringContent es 'no incluye un substring'", () => {
    const resultado = service.substringContent("hola hello", "pella");
    expect(resultado).toBe("no incluye un substring");
  });
  it("El resultado de arrayAvg es 6'", () => {
    const resultado = service.arrayAvg([1, 2, 3]);
    expect(resultado).toBe("2.00");
  });
  it("El resultado de arrayAvg es 8'", () => {
    const resultado = service.arrayAvg([4, 2, 3, -1, 3]);
    expect(resultado).toBe("2.20");
  });
  it("El resultado de atringToCArray ['P','a','b','l','o']'", () => {
    const resultado = service.stringToCArray("Pablo");
    expect(resultado).toEqual(["P", "a", "b", "l", "o"]);
  });
  it("El resultado de atringToCArray ['1','2','3','1','a']'", () => {
    const resultado = service.stringToCArray("1231a");
    expect(resultado).toEqual(["1", "2", "3", "1", "a"]);
  });
  it("El resultado de sumDig es 8'", () => {
    const resultado = service.sumDig(53);
    expect(resultado).toBe(8);
  });
  it("El resultado de sumDig es 1'", () => {
    const resultado = service.sumDig(10);
    expect(resultado).toBe(1);
  });
  it("El resultado de anagram es true'", () => {
    const resultado = service.anagram("hola", "aloh");
    expect(resultado).toBe(true);
  });

  it("El resultado de anagram es false'", () => {
    const resultado = service.anagram("holas", "taloh");
    expect(resultado).toBe(false);
  });
  it("El resultado de repeatedNum es 'No hay ningún número duplicado'", () => {
    const resultado = service.repeatedNum([1, 2, 3, 4]);
    expect(resultado).toBe("No hay ningún número duplicado");
  });
  it("El resultado de repeatedNum es 'El número repetido es 2'", () => {
    const resultado = service.repeatedNum([1, 2, 2, 4]);
    expect(resultado).toBe("El número repetido es 2");
  });
  it("El resultado de total days es 3'", () => {
    const resultado = service.totalDays(
      new Date("2023-07-04"),
      new Date("2023-07-01")
    );
    expect(resultado).toBe(3);
  });

  it("El resultado de total days es 3'", () => {
    const resultado = service.totalDays(
      new Date("2023-07-01"),
      new Date("2023-07-05")
    );
    expect(resultado).toBe(4);
  });
});
