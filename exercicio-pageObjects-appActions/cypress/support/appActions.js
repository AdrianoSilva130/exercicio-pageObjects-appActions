class AppActions {
  visitarProdutos() {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
  }

  selecionarProduto(nomeProduto) {
    cy.get('.products .product-block').contains(nomeProduto).click();
  }
    
  selecionarTamanhoL() {
    cy.get('.button-variable-item-L')
      .should('be.visible')
      .click({ force: true })
  }

  selecionarCorBlack() {
    cy.get('.button-variable-item-Black')
      .should('be.visible')
      .click({ force: true })
  }

  
  definirQuantidade(quantidade = 1) {
    cy.get('input.qty').clear().type(`${quantidade}`);
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click();
  }

  abrirCarrinho() {
  cy.get('.woocommerce-message > .button').click();
}

irParaCheckout() {
    cy.get('.checkout-button')
      .should('be.visible')
      .click();
  }

  realizarLogin(email, senha) {
    cy.get('.showlogin').click();
    cy.get('#username').type(email);
    cy.get('#password').type(senha);
    cy.get('button[name="login"]').click();
  }

  preencherDadosCheckout(dados) {
    cy.get('#billing_first_name').clear().type(dados.nome);
    cy.get('#billing_last_name').clear().type(dados.sobrenome);
    cy.get('#billing_address_1').clear().type(dados.endereco);
    cy.get('#billing_city').clear().type(dados.cidade);
    cy.get('#billing_postcode').clear().type(dados.cep);
    cy.get('#billing_phone').clear().type(dados.telefone);
    cy.get('#billing_email').clear().type(dados.email);
  }

  aceitarTermos() {
    cy.get('#terms').check();
  }

  finalizarPedido() {
    cy.get('#place_order').click();
  }
}

export const appActions = new AppActions();
