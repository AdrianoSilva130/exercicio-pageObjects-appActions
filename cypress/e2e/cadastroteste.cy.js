import { CadastroPage } from '../support/pages/cadastro.page';
import { faker } from '@faker-js/faker';


describe('Fluxo de criação de conta', () => {
  const cadastroPage = new CadastroPage();

  beforeEach(() => {

    cy,setCookie('ebacStoreVersion', 'v3', {domain: 'lojaebac.ebaconline.art.br/'})
    cy.visit('/');
  });
  
   it('Deve criar uma conta com sucesso', () => {
    
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
  });
});
