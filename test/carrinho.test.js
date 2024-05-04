/* eslint-disable no-undef */
import Carrinho from "../src/carrinho.js"
import Item from "../src/item.js"

describe("Teste Classe Carrinho", () => {

  it("SubTotal vazio", () => {
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull()
  })

  it("Valida propriedade Total", () => {
    expect(new Carrinho()).toHaveProperty("total")
  })

  it("Add item no Carrinho", () => {
    const carrinho = new Carrinho()
    const fazer = new Item("Fazer", 1, 20)
    const vstrom = new Item("Vstrom", 1, 30)

    carrinho.adiciona(fazer)
    carrinho.adiciona(vstrom)

    expect(typeof carrinho).toBe("object")
    expect(carrinho.itens[0]).toBe(fazer)
    expect(carrinho.itens[1]).toBe(vstrom)

    expect(carrinho.itens).toContain(fazer)
    expect(carrinho.itens).toContain(vstrom)
  })

  it("Valida Carrinho Vazio", () => {
    const carrinho = new Carrinho()
    expect(carrinho.finalizaCompra).toThrow(Error)
  })

  it("Valida Frete", () => {
    const carrinho = new Carrinho()
    carrinho.adicionaFrete(10)
    expect(carrinho.frete).toBe(10)
  })

  it("Finalizar Compra", () => {
    // toStrictEqual => Usando quando tipo de retorno é diferente, mas os 
    // valores são iguais. Exemplo: String e Object
    
    const burgman = new Item('Burgman', 1, 100)
    const carrinho = new Carrinho()
    carrinho.adiciona(burgman)
    carrinho.adicionaFrete(5)
    
    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 100,
      frete: 5,
      total: 105
    })
  })
})