const { Given, Then, When } = require('cucumber');

const contasActions = require('../page-actions/contasActions.js');

When('preencho o campo Conta {string}', (conta) => {

    return contasActions.preencherCampoConta(conta);
});

When('clico no botão Salvar', () => {

    return contasActions.clicarBotaoSalvar();
});

Then('o sistema salva e apresenta a nova conta na lista {string}', (conta) => {

    return contasActions.validarCadastroConta(conta);
});