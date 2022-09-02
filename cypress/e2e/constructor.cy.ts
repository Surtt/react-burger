/// <reference types="cypress" />

describe("correct burger order", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  beforeEach(() => {
    switch (Cypress.currentTest.title) {
      case "should move to default page":
        break;
      default:
        cy.get("[class^=ingredient-card_ingredientContainer__]").as(
          "ingredient"
        );
        cy.get("[class^=burger-constructor_burgerConstructorContainer__]").as(
          "constructor"
        );
        break;
    }
  });

  it("should add buns to constructor", () => {
    cy.get("@ingredient").first().trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains("Краторная булка N-200i");
    cy.get("@ingredient").first().contains("2");
  });

  it("should add a main", () => {
    cy.get("[class^=tab_tab__]").contains("Начинки").click();
    cy.get("@ingredient")
      .contains("Хрустящие минеральные кольца")
      .trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains("Хрустящие минеральные кольца");
    cy.get("@ingredient").first().contains("1");
  });

  it("should add a sauce", () => {
    cy.get("[class^=tab_tab__]").contains("Соусы").click();
    cy.get("@ingredient").contains("Соус Spicy-X").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains("Соус Spicy-X");
    cy.get("@ingredient").first().contains("1");
  });

  it("should delete a sauce", () => {
    cy.get("[class^=burger-constructor_ingredientWrapper__]")
      .eq(1)
      .find("[class^=constructor-element__action]")
      .click();
    cy.get("@constructor").contains("Соус Spicy-X").should("not.exist");
    cy.get("@ingredient").first().contains("1");
  });

  it("should move to login page", () => {
    cy.get("[class^=button_button__]").as("button");
    cy.get("@button").contains("Оформить заказ").click();
    cy.get("[class^=form_wrapper__]").contains("Вход");
  });

  it("should move to default page", () => {
    cy.get("[class^=button_button__]").as("button");
    cy.get("input[type=email]").type("fallen2@yandex.ru");
    cy.get("input[type=password]").type("AnfdYuv182");
    cy.get("@button").contains("Войти").click();
    cy.get("[class^=burger-ingredients_ingredientsBlockContainer__]").contains(
      "Соберите бургер"
    );
  });

  it("should make order", () => {
    cy.get("[class^=button_button__]").as("button");
    cy.get("@button").contains("Оформить заказ").click();
    cy.get("[class^=order-details_orderContainer__]")
      .find(".text")
      .contains("Ваш заказ начали готовить");
  });
});

export {};
