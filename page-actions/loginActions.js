const { client } = require('nightwatch-api');

const login = client.page.loginElements();

module.exports = {

    abrirSistemaEstudos: () => {
        
        return login
                .navigate()
                .waitForElementVisible('@pagina');
    },

    preencherCampoEmail: (email) => {    

        return login
                .setValue('@campoEmail', email);
    },

    preencherCampoSenha: (senha) => {
        
        return login 
                .setValue('@campoSenha', senha);
    },

    clicarBotaoEntrar: () => {
        
        return login
                .click('@botaoEntrar');
    }
}