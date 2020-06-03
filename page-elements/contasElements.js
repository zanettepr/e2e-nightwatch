module.exports = {

    elements: {
        campoConta: {
            selector: '[data-test=nome]'
        },
        botaoSalvar: {
            selector: '//input[@data-test="nome"]/../following-sibling::div//button',
            locateStrategy: 'xpath'
        },
        listaContas: {
            selector: '//table//tbody',
            locateStrategy: 'xpath'
        },
        itemListaContas: {
            selector: '//tbody//tr',
            locateStrategy: 'xpath'
        }
    }
}