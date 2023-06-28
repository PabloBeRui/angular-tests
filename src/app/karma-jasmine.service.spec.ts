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
});
