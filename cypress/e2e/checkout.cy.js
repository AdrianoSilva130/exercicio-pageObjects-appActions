import { appActions } from '../support/appActions';

describe('Fluxo de compra com AppActions', () => {
  it('Seleciona produto, faz login e finaliza a compra', () => {
    const cliente = {
      nome: 'Adriano',
      sobrenome: 'Silva',
      endereco: 'Rua Exemplo, 123',
      cidade: 'São Paulo',
      cep: '01010-010',
      telefone: '11999999999',
      email: 'usuario@teste.com'
    };

    appActions.visitarProdutos();
    appActions.selecionarProduto('Aero Daily Fitness Tee');
    cy.wait(1000);
    appActions.selecionarTamanhoL();
    cy.wait(1000);
    appActions.selecionarCorBlack();    
    appActions.definirQuantidade(1);
    appActions.adicionarAoCarrinho();
    cy.wait(2000);
    appActions.abrirCarrinho();
    appActions.irParaCheckout();


    appActions.realizarLogin(cliente.email, 'senha@123');
    appActions.preencherDadosCheckout(cliente);
    appActions.aceitarTermos();
    appActions.finalizarPedido();

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
  });
});
