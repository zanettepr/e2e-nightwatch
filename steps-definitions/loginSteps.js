const { Given, Then, When } = require('cucumber');

const loginActions = require('../page-actions/loginActions.js');

Given('que estou na página de login do sistema Estudos', () => {
    
    return loginActions.abrirSistemaEstudos();
});

Given('que estou logado do sistema Estudos {string} {string}', (email, senha) => {

    loginActions.abrirSistemaEstudos();
    
    loginActions.preencherCampoEmail(email);
    loginActions.preencherCampoSenha(senha);

    return loginActions.clicarBotaoEntrar();
});

When('preencho o campo Email {string}', (email) => {
    
    return loginActions.preencherCampoEmail(email);
});

When('preencho o campo Senha {string}', (senha) => {
    
    return loginActions.preencherCampoSenha(senha);
});

When('clico no botão Entrar', () => {
    
    return loginActions.clicarBotaoEntrar();
});