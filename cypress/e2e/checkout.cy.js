describe('Fluxo de compra do produto Aero Daily Fitness Tee', () => {
  it('Seleciona o produto, faz login e finaliza a compra', () => {
    // Visita a página de produtos
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');

    // Seleciona o produto específico e clica
    cy.get('.products .product-block').contains('Aero Daily Fitness Tee').click();
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Black').click();
    cy.get('input.qty').clear().type('1');

    // Adiciona ao carrinho
  cy.get('.single_add_to_cart_button').click();

cy.wait(1000);  
cy.clicarBotaoMensagemCarrinho();

    // Faz login
    cy.get('#username').type('adriano.teste@teste.com');
    cy.get('#password').type('senha@123');
    cy.get('button[name="login"]').click();

    // Preenche dados de cobrança
    cy.get('#billing_first_name').clear().type('Adriano');
    cy.get('#billing_last_name').clear().type('Silva');
    cy.get('#billing_address_1').clear().type('Rua Teste, 123');
    cy.get('#billing_city').clear().type('São Paulo');
    cy.get('#billing_postcode').clear().type('01010-010');
    cy.get('#billing_phone').clear().type('11999999999');
    cy.get('#billing_email').clear().type('usuario@teste.com');

    // Aceita os termos
    cy.get('#terms').check();

    // Finaliza o pedido
    cy.get('#place_order').click();

    // Verifica mensagem de sucesso
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
  });
});

 
 



