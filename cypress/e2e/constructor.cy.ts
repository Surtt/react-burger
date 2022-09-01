/// <reference types="cypress" />

describe("correct burger order", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[class^=ingredient-card_ingredientContainer__]").as("ingredient");
    cy.get("[class^=burger-constructor_burgerConstructorContainer__]").as(
      "constructor"
    );
  });

  it("should add ingredient to constructor", () => {
    cy.get("@ingredient").first().trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains("Краторная булка N-200i");
    cy.get("@ingredient").first().contains("2");
    cy.get("[class^=tab_tab__]").contains("Начинки").click();
    cy.get("@ingredient")
      .contains("Хрустящие минеральные кольца")
      .trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains("Хрустящие минеральные кольца");
    cy.get("@ingredient").first().contains("1");
  });
});
