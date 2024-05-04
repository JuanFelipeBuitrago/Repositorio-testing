const sum = require("./sum")

test("suma de 1 y 2 que da 3", () => {
    const resultado = sum(1,2)
    expect(resultado).toBe(3);
});
test ("suma de 10 y 10 da 20", () => {
    const resultado = sum(10,10)
    expect(resultado).toBe(20);
});
test("Error variable indefinida", () => {
    const resultado = sum()
    expect(resultado).toBe("Hubo un error");
});