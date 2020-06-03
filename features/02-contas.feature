# language: pt
Funcionalidade: Contas

Esquema do Cenário: Cadastrar conta com sucesso

    Dado que estou logado do sistema Estudos "<email>" "<senha>"
    Quando clico no menu Configurações
        E clico no sub-menu Contas
        E preencho o campo Conta "<conta>"
        E clico no botão Salvar
    Então o sistema salva e apresenta a nova conta na lista "<conta>"

Exemplos:
| email           | senha  | conta   |
| paulo@gmail.com | 123456 | Conta 3 |