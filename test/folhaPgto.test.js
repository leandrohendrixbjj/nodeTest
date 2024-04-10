/* eslint-disable no-undef */
import { reajusteSalario, descontoSalario } from "../folhaPgto.js"

test("Reajuste Salário", () => {
  const esperado = 100
  const salario = reajusteSalario(80, 20)

  expect(salario).toBe(esperado)
})

test("Desconto Salário", () => {
  const esperado = 80
  const salario = descontoSalario(100, 20)
  expect(salario).toBe(esperado)
})