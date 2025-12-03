describe("Carrinho - Testes com Intercept", () => {

  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2")
    cy.visit("/")
  })

  it("Deve simular adicionar item no carrinho", () => {

    cy.intercept("POST", "**/cart/add*", {
      statusCode: 200,
      body: {
        success: true,
        message: "Produto adicionado com sucesso",
        cart: {
          totalItems: 1,
          items: [
            {
              id: 123,
              nome: "Camisa EBAC",
              quantidade: 1,
              preco: 99.90
            }
          ]
        }
      }
    }).as("addItem")

    cy.get('[data-testid="btn-add-cart"]').first().click()

    cy.wait("@addItem").its("response.statusCode").should("eq", 200)

    cy.compareSnapshot(Cypress.currentTest.title)
  })

  it("Deve simular remover item do carrinho", () => {

    cy.intercept("POST", "**/cart/remove*", {
      statusCode: 200,
      body: {
        success: true,
        cart: {
          totalItems: 0,
          items: []
        }
      }
    }).as("removeItem")

    cy.get('[data-testid="btn-remove"]').first().click()

    cy.wait("@removeItem")
      .its("response.body.cart.items.length")
      .should("eq", 0)

      cy.compareSnapshot(Cypress.currentTest.title)
  })

  it("Deve simular atualizar quantidade do item", () => {

    cy.intercept("POST", "**/cart/update*", {
      statusCode: 200,
      body: {
        success: true,
        cart: {
          totalItems: 1,
          items: [
            {
              id: 123,
              nome: "Camisa EBAC",
              quantidade: 3,
              preco: 99.90
            }
          ]
        }
      }
    }).as("updateItem")

    cy.get('[data-testid="quantity"]').clear().type("3")

    cy.wait("@updateItem")
      .its("response.body.cart.items[0].quantidade")
      .should("eq", 3)

      cy.compareSnapshot(Cypress.currentTest.title)
  })
})
