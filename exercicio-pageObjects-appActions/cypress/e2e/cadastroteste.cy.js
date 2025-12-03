import { CadastroPage } from '../support/cadastro.page';
import { faker } from '@faker-js/faker';

describe('Fluxo de criação e edição de conta', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v3', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/')
  });

  it('Deve criar uma conta com sucesso', () => {
    var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')

});
});
