module.exports = {

    elements: {
        mensagemBemVindo: {
            selector: '//div[@role = "alert"]',
            locateStrategy: 'xpath'
        },
        botaoHome: {
            selector: '//i[@class = "fas fa-home"]',
            locateStrategy: 'xpath'
        },
        menuConfiguracoes: {
            selector: '[data-test=menu-settings]'
        },
        subMenuContas: {
            selector: '//a[@data-test = "menu-settings"]/following-sibling::div//a[@href = "/contas"]',
            locateStrategy: 'xpath'
        }
    }
}