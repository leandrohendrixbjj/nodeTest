/* eslint-disable no-undef */
import Item from "../src/item.js"

describe("Teste dos itens", () => {

  it("Todos os campos de item", () => {
    const item = new Item("Meteor", 350, 1)

    expect(typeof item).toBe("object")
    expect(item.nome).toBe("Meteor")
    expect(item.valor).toBe(350)
    expect(item.quantidade).toBe(1)
  })

  it("Totais do Item", () => {
    const item = new Item("Meteor", 0.1, 3)

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3)
  })

})