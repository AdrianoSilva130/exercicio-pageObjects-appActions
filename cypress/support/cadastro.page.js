export class CadastroPage {
  
  acessarPagina() {
    cy.visit('/');
    cy.get('a[href="/minha-conta/"]').click(); // Link para a página de cadastro/login
  }

  preencherNome(nome) {
    cy.get('#reg_billing_first_name').clear().type(nome);
  }

  preencherSobrenome(sobrenome) {
    cy.get('#reg_billing_last_name').clear().type(sobrenome);
  }

  preencherEmail(email) {
    cy.get('#reg_email').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('#reg_password').clear().type(senha);
  }

  clicarRegistrar() {
    cy.get('button[name="register"]').click();
  }

  verificarMensagemSucesso() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello');
  }
}
