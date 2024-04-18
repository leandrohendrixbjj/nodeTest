/* eslint-disable no-undef */
import Carrinho from "../src/carrinho.js"
import Item from "../src/item.js"

describe("Teste Classe Carrinho", () => {

  it("SubTotal vazio", () => {
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull()
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

  it("Valida propriedade Total", () => {
    const carrinho = new Carrinho()
    expect(carrinho).toHaveProperty("total")
  })

})