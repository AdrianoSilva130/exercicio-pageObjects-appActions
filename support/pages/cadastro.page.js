export class CadastroPage {
  
    acessarPagina() {
    cy.visit('/');
    cy.get('a[href="/minha-conta/"]').click(); // link para criar conta
  }

  preencherNome(nome) {
    cy.get('#reg_billing_first_name').type(nome);
  }

  preencherSobrenome(sobrenome) {
    cy.get('#reg_billing_last_name').type(sobrenome);
  }

  preencherEmail(email) {
    cy.get('#reg_email').type(email);
  }

  preencherSenha(senha) {
    cy.get('#reg_password').type(senha);
  }

  clicarRegistrar() {
    cy.get('button[name="register"]').click();
  }

  verificarMensagemSucesso() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello');
  }
}
