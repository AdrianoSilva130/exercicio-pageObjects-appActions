// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Adicionar produto ao carrinho
Cypress.Commands.add('adicionarProduto', () => {
  cy.visit('/');
  cy.contains('Aero Daily Fitness Tee').click();
  cy.get('button.single_add_to_cart_button').click();
});

// Ir para o carrinho
Cypress.Commands.add('abrirCarrinho', () => {
  cy.get('a.cart-contents').click();
});

// Preencher dados do checkout
Cypress.Commands.add('preencherCheckout', (dados) => {
  cy.get('#billing_first_name').clear().type(dados.nome);
  cy.get('#billing_last_name').clear().type(dados.sobrenome);
  cy.get('#billing_address_1').clear().type(dados.endereco);
  cy.get('#billing_city').clear().type(dados.cidade);
  cy.get('#billing_postcode').clear().type(dados.cep);
  cy.get('#billing_phone').clear().type(dados.telefone);
  cy.get('#billing_email').clear().type(dados.email);
});

// Finalizar pedido
Cypress.Commands.add('finalizarPedido', () => {
  cy.get('#place_order').click();
});

const compareSnapshotCommand = require("cypress-lens/dist/command");

compareSnapshotCommand();