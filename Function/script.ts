function somarNumeros(a: number, b: number, c?: number): number {
    return a + b + (c ? c : 0);
}

somarNumeros(3, 4);
somarNumeros(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);
