
## 👜 Documentação do Projeto de Backend: Servidor Integrado com MongoDB e Google Gemini.

##  Objetivo do Projeto:

Este projeto foi desenvolvido com o objetivo de praticar e aprofundar conhecimentos em desenvolvimento backend utilizando Node.js e Express, integrações com o banco de dados MongoDB e a API do Google Gemini para geração automática de descrições de imagens. 

O projeto foi feito com base na imersão back-end da Alura, não possui fins comerciais e faz parte do meu portfólio como desenvolvedor. Agora o back-end está finalizado e totalmente funcional!

## 🛠 Funcionalidades Implementadas:

### CRUD de Posts:

- Listar todos os posts.
- Criar novos posts com ou sem upload de imagens.
- Atualizar posts existentes, incluindo geração automática de descrições.

### Upload de Imagens:

- Upload de arquivos com uso do Multer para armazenamento local na pasta uploads.
- Renomeação de arquivos com base no ID gerado pelo MongoDB.
- Geração de Descrições com Google Gemini:
- Integração com a API do Google Gemini para criação automática de descrições alt-text para imagens.

### Tecnologias Utilizadas:

#### Backend:

- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework para criação de aplicações web e APIs.
- Multer: Middleware para upload de arquivos.

### Banco de Dados:

- MongoDB Atlas: Banco de dados NoSQL utilizado para armazenamento de dados.
- Driver Oficial do MongoDB para Node.js: Para manipulação de dados.
- Integrações com API

### Google Gemini:

- Utilizado para processar imagens e gerar descrições alt-text em português.

## 📄 Descrição dos Arquivos Principais

### server.js:

- Configuração inicial do servidor Express.
- Roteamento das requisições usando postsRoutes.
- Porta configurada para 3000.

### dbConfig.js

- Configuração de conexão com o banco de dados MongoDB.
- Utiliza a string de conexão armazenada nas variáveis de ambiente.

### postsController.js

- Contém as lógicas principais para manipulação de posts:
- Listagem de posts.
- Criação de posts.
- Upload e atualização de imagens com descrições geradas pelo Google Gemini.

### postsModels.js

- Modelos para interação com o banco de dados MongoDB.
- Funções para listar, criar e atualizar posts.

### postsRoutes.js

#### Configuração das rotas da aplicação:

- GET /posts: Lista todos os posts.
- POST /posts: Cria um novo post.
- POST /upload: Faz upload de uma imagem.
- PUT /upload/:id: Atualiza as informações de um post e gera uma descrição automática para a imagem.

### geminiServices.js

Integração com a API do Google Gemini para geração de descrições alt-text para imagens.

Converte a imagem para base64 antes de enviar para a API.

## ⚙ Configuração do Ambiente

### Rodando o Projeto Localmente

Caso você deseje rodar este projeto na sua máquina local, siga os passos abaixo para configurar o ambiente e executar a aplicação:

#### Pré-requisitos:

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas na sua máquina:

 - [Node.js](https://nodejs.org/)

Necessário para rodar o backend. Verifique se está instalado com o comando:
```bash
node -v
```
### MongoDB
Configure o MongoDB localmente ou utilize uma instância do MongoDB Atlas.

Git
Para clonar o repositório. Certifique-se de que o Git está instalado:

```bash
git --version
```

### Passo a Passo para Configuração

Clone o Repositório:

git clone <URL_DO_REPOSITORIO>

cd <NOME_DO_REPOSITORIO>

#### Instale as Dependências Use o npm para instalar as dependências do projeto:

### Instale as dependências:

```bash
npm install
```

### Dependências do Projeto

O projeto utiliza as seguintes bibliotecas e ferramentas:

#### express : Framework para criação de APIs e aplicações web.
```bash
npm install express
```
#### mongodb : Driver oficial do MongoDB para Node.js.
```bash
npm install mongodb
```
#### dotenv : Carrega variáveis ​​de ambiente de um arquivo.env.
```bash
npm install dotenv
```
#### multer : Middleware para upload de arquivos.

```bash
npm install multer
```

#### @google /generative -ai : Biblioteca para interação com a API do Google Generative AI.

```bash
npm install @google/generative-ai
```

#### Configure as variáveis de ambiente no arquivo .env:

- STRING_CONEXAO=<sua_string_de_conexao_com_mongodb>
- GEMINI_API_KEY=<sua_chave_de_api_google_gemini>


## Referência

 - [Imersão Back-end Alura](https://www.alura.com.br/)

## Conclusão

Este projeto representa uma iniciativa para aprender e consolidar conceitos de backend, integração com APIs e manipulação de dados. Agora o back-end está finalizado, funcional e pronto para uso, mas ainda há espaço para melhorias e refinamentos no futuro.
