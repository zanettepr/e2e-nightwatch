# language: pt
Funcionalidade: Login

Esquema do Cenário: Realizar login com sucesso no sistema de Estudos

  Dado que estou na página de login do sistema Estudos
  Quando preencho o campo Email "<email>"
    E preencho o campo Senha "<senha>"
    E clico no botão Entrar
  Então devo ser direcionado para a página home do sistema Estudos "<mensagem>"

Exemplos:
| email           | senha  | mensagem          |
| paulo@gmail.com | 123456 | Bem vindo, Paulo! |