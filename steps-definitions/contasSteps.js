const { Given, Then, When } = require('cucumber');

const contasActions = require('../page-actions/contasActions.js');

When('preencho o campo Conta {string}', (conta) => {

    return contasActions.preencherCampoConta(conta);
});

When('clico no botão Salvar', () => {

    return contasActions.clicarBotaoSalvar();
});

When('clico no Botao excluir de uma Conta {string}', (conta) => {

    return contasActions.clicarBotaExcluirListaContas(conta);
});

Then('o sistema salva e apresenta a nova conta na lista {string}', (conta) => {

    return contasActions.validarCadastroConta(conta);
});

Then('o sistema deve excluir a Conta {string}', (conta) => {

    return contasActions.validarContaExcluida(conta);
});