const { client } = require('nightwatch-api');

const home = client.page.homeElements();

module.exports = {

    clicarMenuConfigracoes: () => {

        return home
                .click('@menuConfiguracoes');
    },  

    clicarSubMenuContas: () => {    

        return home 
                .click('@subMenuContas');
    },

    validarMensagemHome: (mensagem) => {
        
        return home
                .waitForElementVisible('@botaoHome')
                .expect
                .element('@mensagemBemVindo')
                .text.to.contain(mensagem);
    }
}