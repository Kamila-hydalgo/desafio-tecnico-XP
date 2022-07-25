# **Boas vindas ao repositório do Desafio Técnico XP - Processo seletivo XP Inc.!**

Este projeto foi especialmente desenvolvido para o processo seletivo da XP Inc., exclusivo da Turma XP em parceria com a Trybe! 

Nessa aplicação construí um <strong>Front-End</strong> de um aplicativo de investimentos em ações, onde é possível que o usuário veja todas as ações disponíveis para compra na página principal, bem como as ações já adquiridas na sua carteira. É possível comprar uma nova ação, e comprar ou vender ações já adquiridas anteriormente. A aplicação conta com uma página da conta digital, onde é possível fazer depósitos e saques em sua conta.


## **:computer: Deploy**

Você pode acessar o [PROJETO AQUI](https://rico-investimentos.vercel.app/) para visualizar a aplicação.

## **:hammer_and_wrench: Tecnologias**

Esse projeto foi desenvolvido com as seguintes tecnologias em Front-end:

- React
- Redux Toolkit
- Hooks
- JavaScript
- Styled components

## **:woman_technologist: Desenvolvimento**

Para desenvolver essa aplicação optei por utilizar o <strong>React</strong>, que foi a biblioteca pela qual desenvolvi meus projetos em Front-end pelo curso da Trybe nos últimos meses. Para armazenar e trafegar os dados utilizei o <strong>React-redux</strong> , pois ele me garante um estado global isolado e com a manipulação dele fora dos componentes, o que deixa o código mais organizado para o desenvolvimento. Aproveitei a oportunidade para utilizar a versão mais moderna do Redux, o <strong>toolkit</strong>, que deixou a configuração muito mais simples, já que consigo em um único arquivo criar, pela função createSlice(), os reducers e actions ao mesmo tempo. Além disso, ele automaticamente utiliza uma biblioteca chamada Immer, que nos permite alterar diretamente o valor do estado, mas garantindo sua imutabilidade da mesma forma.

<summary><strong>:building_construction: Estrutura</strong></summary>

- Estado global possui 2 slices: `user` e `asset`:

  - <strong>user</strong>: informações de email e saldo disponível da conta digital do cliente.
  - <strong>asset</strong>: todas as ações disponíveis na carteira do cliente e todas as ações disponíveis para compra(essa alimentada por um arquivo JSON)

- Aplicação possui 4 páginas: Login(`/`), Assets(`/assets`), Trade(`/assets/códigoAção/idAção`) e Account(`/account`):

  - <strong>Login</strong>: usuário coloca email e senha para realizar login e acessar a página principal de ações(`/assets`). A informação de email é salva no <strong>local Storage</strong>, juntamente com data e horário logados, e disponibilizada no componente Header em todas as páginas da aplicação. A validação do email foi feita com a lib `react-email-validator` e a senha para ter no mínimo 6 caracteres. 
  
  - <strong>Assets</strong>: essa página possui 2 componentes- `MyAssets` e `AllAssets`, onde são renderizadas todas as ações da carteira do cliente e todas as ações disponíveis para compra. Usuário pode clicar nas ações que deseja comprar e vender(caso já tenha em carteira) e será levado para página de trade.
  
  - <strong>Trade</strong>: nessa página usuário pode ver a quantidade disponível para compra da ação, preço e determinar quantas unidades deseja comprar ou vender. Também é possível ver o saldo disponível em conta atualizado após compras ou vendas.
  
  - <strong>Account</strong>: usuário consegue fazer depósitos e saques da sua conta digital e vizualizar seu saldo disponível.
  

<summary><strong>🎛 Linter</strong></summary>

 - Para melhorar a qualidade do código e garantir uma melhor legibilidade, utilizei o ESlint do Airbnb.

<summary><strong>:art: Estilo</strong></summary>

 - Para estilização optei por utilizar <strong>Styled components</strong>, porque com ele, cada estilo está ligado ao seu componente específico, eliminando possíveis problemas com nomes de classes duplicadas.
 - Já as notificações para usuário foram feitas com o `React hot Toast`.
 

## **:exploding_head: Desafios e aprendizados**

 - Atualmente estou cursando o módulo de Back-End no curso de Desenvolvimento Web na Trybe, então meu maior desafio primeiramente foi fazer a <strong>gestão de tempo</strong> para conseguir desenvolver essa aplicação em Front-end da melhor maneira juntamente com o conteúdo/projetos em andamento do curso. Desafiei-me a realizá-la com o Redux toolkit, que não havia utilizado antes e foi um processo de aprendizado enriquecedor onde aprimorei ainda mais a capacidade de aprender a aprender. Para ajudar na minha organização de prioridades, criei um excalidraw e defini a ordem das telas e componentes e que iria implementar.
 
 - Outro ponto bastante desafiador, foi conseguir abranger o máximo as <strong>validações de erros</strong> para notificar o usuário de como agir ao utilizar a aplicação. Se colocar no lugar do Cliente e pensar em várias cenários como: não conseguir comprar ação caso não tenha saldo suficiente, não poder vender uma quantidade de ação maior do que ele possui, não poder sacar um valor maior que o disponível em conta, fazer com que o saldo da conta altere assim que for realizada uma compra ou venda, entre outros.
 
 - E acredito que tenha sido o maior deles, os <strong>testes</strong>! Após várias tentativas, não consegui implementá-los já que com o toolkit temos o configureStore lidando com o store e não consegui realizar o mock do mesmo. Esse realmente é um ponto de atenção, visto que tenho consciência do quanto testes são fundamentais para desenvolvimento de aplicações seguras e a implementação dos mesmos é fundamemtal no ambiente de trabalho. 


## **:arrow_down: Instalando dependências**

1. Clone o repositório

  - `git clone git@github.com:Kamila-hydalgo/desafio-tecnico-XP.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd desafio-tecnico-XP`

  2. Instale as dependências

  - `npm install`

## **:arrow_forward: Executando a aplicação**

Para rodar o front-end:

`npm start`

## **Autora**

[Kamila Hydalgo](https://github.com/Kamila-hydalgo)
