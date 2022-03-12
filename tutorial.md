# Roteiro de implementação - Estrutura Projeto Web + API REST com Express e Jest

# Estrutura projeto Web

O projeto será constituído de pelo menos 3 módulos:

- **app-api**: api rest com a lógica de negócio da aplicação. Ela fará a comunicação com o banco de dados;
- **app-auth**: api rest de módulo dedicado ao gerenciamento de usuários da aplicação;
- **app-front**: view da aplicação;

**Obs**: Não é obrigatório seguir a nomenclatura de nomes dos módulos, é apenas uma sugestão.

## Repositórios no Github

Podemos organizar os projetos de duas formas:

  - todas as pastas em um único repositório;
  - um repositório para cada módulo.

Faça o que for de sua preferência. Todos os módulos em um único repositório pode servir para projetos pequenos, como o desta disciplina. Em projetos maiores, com muitos módulos, geralmente é definido um repositório para cada um deles.

Veja como criar um repositório no git [aqui](https://docs.github.com/pt/get-started/quickstart/create-a-repo).

Após cria-lo, você pode copiar a URL do repositório clicando no botão *Code*. No diretório onde você irá criar seu projeto, você pode iniciar um repositório git com:

> git init

e em seguida realizar um pull do repositório com 

> git pull <URL>

Digite seguinte comando para ter certeza que o git está apontando para o seu diretório.

> git remote show origin

## Criando o app-front

No nosso curso iremos desenvolver o front-end da aplicação utilizando o framework Nuxt.js. Para criar um projeto no mesmo, siga os passos:

1. Escolha um diretório e insira o comando a seguir para criar um projeto Nuxt.js.

> npm init nuxt-app <nome-do-app>

Como resultado você terá a seguinte estrutura de diretórios:

```
├───components
│       NuxtLogo.vue
│       Tutorial.vue│
├───pages
│       index.vue
├───static
│       favicon.ico
├───store
│       README.md
└───test
|       NuxtLogo.spec.js
│   .babelrc
│   .editorconfig
│   .gitignore
│   .prettierignore
│   .prettierrc
│   jest.config.js
│   jsconfig.json
│   nuxt.config.js
│   package-lock.json
│   package.json
│   README.md
│   tree.txt
```

Teste executando do novo diretório criado o seguinte comando.

> npm run dev

Acesse pelo browser o endereço (localhost:3000). Pronto! A partir desta estrutura você poderá desenvolver o front-end. Iremos discutir melhor o Nuxt.js nas aulas dedicadas ao framework.

## Criando o app-api

O módulo app-api será o mais complexo, pois nele teremos os endpoints da nossa API e o acesso ao banco de dados com ORM sequelize. Siga os passo a seguir.

1. Inicie um diretório NPM com o comando:

> npm init

O NPM irá solicitar diversar informações do projeto, incluindo o nome do repositório. Aproveite e adicione o repositório criado no git caso tenha optado por usar um repositório separado.

Não esqueça de indicar que o arquivo principal é o *server.js*, e não o index.js que vem configurado por padrão no *package.json*.

2. Crie um projeto de pastas como segue. 

```
src
│   app.js          # Configurações do servidor
│   server.js       # Server para iniciar o app
|   .env            # Configuração das variaveis de ambiente
└───api             
  └───controllers   # Funções da controllers do express route
  └───services      # Regras de negócio
  └───routes        # Definição de rotas express
  └───repositories* # Query builders
└───database        # Arquivos do ORM e acesso ao banco de dados
└───scheme          # Define como uma resposta JSON deve se parecer.
└───utils           # Trechos de códigos pequenos
└───test            # Arquivos de teste do Jest.
```

Para facilitar, use os comandos de terminal a seguir a partir do diretório do projeto.

> nul \> app.js 
>
> nul \> server.js 
>
> nul \> .env 
>
> md src\api
>
> md src\api\controllers
>
> md src\api\services
>
> md src\api\routes
>
> md src\api\repositories
>
> md src\database
>
> md src\scheme
>
> md src\utils
>
> md test

4. Instale os módulos a seguir no projeto

> npm install -s express cors dotenv
> 
> npm install --save-dev nodemon

Os links dos docs de cada módulo estão disponiveis a seguir. 

- [express](https://expressjs.com/pt-br/starter/hello-world.html)
- [cors](https://expressjs.com/en/resources/middleware/cors.html)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)

3. No arquivo app.js, insira o código que define as configurações do servidor como segue:

```javascript
    const express = require("express");
    const cors = require("cors");

    const app = express();

    //Configuração dos middlewares
    app.use(cors());

    //Configuração das rotas da API
    app.get("/", (req, res) =>{
        res.send("Express server");
        res.end();
    });

    //Exporta o aplicativo express configurado
    module.exports = app;
```

4. No arquivo server.js, insira o código que executa o servidor

```javascript
    const app = require("./app.js");
    require("dotenv").config();

    const port = process.env.SERVER_PORT || 8080;

    app.listen(port, () =>{
        console.log(`Server listening on port ${port}`);
    });
```

5. Crie um arquivo com extensão .env para ser lido pelo dotenv e carregarmos configurações na nossa aplicação. Salve dentro da pasta *config* e insira a variável de ambiente como segue (modifique a porta se quiser).

```conf
SERVER_PORT="3333"
```

6. Teste a aplicação executando o nodemon ou npm start e acesse o endereço *localhost:3333*.

> npx nodemon
>
> ou
>
>npm start

6. Na pasta database, inicie um projeto sequelize utilizando a sua ferramenta de cli.

> npx sequelize-cli init

O comando irá criar a seguinte estrutura para você.

```
└───database        # Arquivos do ORM e acesso ao banco de dados
   └───model        # Modelos do banco de dados
   └───seed         # Seeds para popular o banco
   └───migration    # Versões do banco de dados
   └───config       # Confgurações de conexão com o banco de dados
```
Pronto! A partir desta estrutura você poderá desenvolver o back-end.

Existem outras formas de organizar as pastas da sua aplicação. Veja uma discussão em [Como organizar projetos com node](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899).

## Criando o app-auth

O módulo app-auth é um projeto express que irá se conectar com um banco NoSQL, que no caso será o MongoDB. 

1. Para cria-lo, execute o comando na pasta do módulo de autenticação para criar um arquivp package.json.

> npm init

Não se esqueça de definir o server.js como o arquivo principal.

2. Crie a estrutura de diretórios abaixo.

```
│   app.js           # Configurações do servidor
│   server.js        # Server para iniciar o app
|   .env             # Configuração das variaveis de ambiente
└───src                 
   └───constrollers  # Controllers para a requisição
   └───models        # Definição de models usados pelo MongoDB
   └───services      # Serviços e operações com os models
   └───middleware    # Componentes de autenticação
└───config           # Confgurações da aplicação
```

Para facilitar, use os comandos de terminal a seguir a partir do diretório do projeto.

> nul > app.js 
>
> nul > server.js 
>
> nul > .env 
>
> md src\controllers
>
> md src\models
>
> md src\services
>
> md src\middleware
>
> md config

4. Instale os módulos que serão utilizados no projeto

> npm install -s express mongoose jsonwebtoken dotenv bcrypt
>
> npm install --save-dev nodemon

Os links dos docs dos módulos adicionais estão disponiveis a seguir. 

- [mongoose](https://mongoosejs.com/docs/guide.html)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

5. Configure os arquivos *server.js* e *app.js* como foi feito na configuração do módulo **app-api**.

## Commitando o projeto para o Github

Agora que temos a estrutura da nossa aplicação, podemos adiciona-las ao repositório criado. Veja como em alguns tutoriais selecionados.

- [Git sem complicação](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
- [Git sempre pede senha](https://docs.github.com/pt/get-started/getting-started-with-git/why-is-git-always-asking-for-my-password)
- [Autenticação por token](https://www.alura.com.br/artigos/nova-exigencia-do-git-de-autenticacao-por-token-o-que-e-o-que-devo-fazer)
- [Autenticação pela linha de comando](https://blog.cod3r.com.br/autenticacao-no-github-pela-linha-de-comando/)