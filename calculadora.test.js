
const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

test('deve operar corretamente com números negativos', () => {
  expect(somar(-5, 3)).toBe(-2);
  expect(subtrair(-5, 3)).toBe(-8);
  expect(multiplicar(-5, 3)).toBe(-15);
  expect(dividir(-15, 3)).toBe(-5);
});

test('deve calcular a porcentagem de um valor', () => {
  expect(porcentagem(200, 15)).toBe(30);
});

test('deve calcular porcentagens com valores negativos', () => {
  expect(porcentagem(-200, 15)).toBe(-30);
});

test.each([null, undefined])('deve rejeitar o operando %s', (valor) => {
  expect(() => somar(valor, 5)).toThrow('Operandos não podem ser null ou undefined');
  expect(() => somar(5, valor)).toThrow('Operandos não podem ser null ou undefined');
  expect(() => subtrair(valor, 5)).toThrow('Operandos não podem ser null ou undefined');
  expect(() => multiplicar(valor, 5)).toThrow('Operandos não podem ser null ou undefined');
  expect(() => dividir(valor, 5)).toThrow('Operandos não podem ser null ou undefined');
  expect(() => porcentagem(valor, 5)).toThrow('Operandos não podem ser null ou undefined');
});

