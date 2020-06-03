const { client } = require('nightwatch-api');

let qtdContasCadastradas = 0;
const contas = client.page.contasElements();

function obterNumeroItensListaContas() {

    contas
        .waitForElementVisible('@itemListaContas')
        .api.elements('@itemListaContas', result => {

            qtdContasCadastradas = result.value.length;
    });
}

module.exports = {

    preencherCampoConta: (conta) => {

        obterNumeroItensListaContas();

        return contas
                .waitForElementVisible('@botaoSalvar')
                .setValue('@campoConta', conta);
    },

    clicarBotaoSalvar: () => {

        return contas
                .click('@botaoSalvar');
    },

    validarCadastroConta: (conta) => {

        contas
            .expect
            .elements('@itemListaContas')
            .count.to.equal(qtdContasCadastradas + 1);
            
        return contas
                .expect
                .element('@listaContas')
                .text.to.contain(conta);
    }
}