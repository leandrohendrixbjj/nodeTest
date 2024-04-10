/* eslint-disable no-undef */
import { wageRaising, wageDiscount } from "../folhaPgto.js"

test("Wage Raising", () => {
  const newSalary = 100
  const wage = wageRaising(80, 20)

  expect(newSalary).toBe(wage)
})

test("Wage Discount", () => {
  const newSalary = 80
  const wage = wageDiscount(100, 20)

  expect(newSalary).toBe(wage)
})