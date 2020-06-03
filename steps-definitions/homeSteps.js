const { Given, Then, When } = require('cucumber');

const homeActions = require('../page-actions/homeActions.js');

When('clico no menu Configurações', () => {

    return homeActions.clicarMenuConfigracoes();
});

When('clico no sub-menu Contas', () => {

    return homeActions.clicarSubMenuContas();
});

Then('devo ser direcionado para a página home do sistema Estudos {string}', (mensagem) => {
    
    return homeActions.validarMensagemHome(mensagem);
});