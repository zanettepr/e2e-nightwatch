module.exports = {

    url: 'https://barrigareact.wcaquino.me/',
    elements: {
        pagina: {
            selector: 'body'    
        },
        campoEmail: {
            selector: '//input[@type = "text"]',
            locateStrategy: 'xpath'
        },
        campoSenha: {
            selector: '//input[@type = "password"]',
            locateStrategy: 'xpath'
        },
        botaoEntrar: {
            selector: '//button[@type = "submit"]',
            locateStrategy: 'xpath'
        }
    }
}