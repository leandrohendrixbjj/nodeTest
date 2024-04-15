/* eslint-disable no-undef */
import { wageRaising, wageDiscount } from "../src/folhaPgto.js"

describe("Teste folha de Pagamento", () => {
  it("Wage Raising", () => {
    const newSalary = 100
    const wage = wageRaising(80, 20)

    expect(newSalary).toBe(wage)
  })

  it("Wage Discount", () => {
    const newSalary = 80
    const wage = wageDiscount(100, 20)

    expect(newSalary).toBe(wage)
  })
})
