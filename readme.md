# Books

## Description

Este é um projeto utilizando Docker, Python, Next.js e sqlite3.

O objetivo deste projeto é criar uma aplicação Frontend e integrá-la em uma API Python. Toda a aplicação é mantida em containers Docker e é executada usando docker-compose.

## Instrucoes

O repositorio e dividido em 3 pastas:

- \_docker-compose
- backend
- frontend

Na pasta **_\_docker-compose_**, estao os arquivos responsaveis por subir todas as imagens Docker. Um **docker-compose.yml**, que possui as informacoes de quais containers e imagens devem subir; um script **docker-up.bash** que sobe os containers baseado no arquivo **docker-compose.yml**; e um arquivo **docker.log**, que armazena todos os logs da aplicacao.

Ja na pasta **_backend_** esta a API de livros, em Python Flask. Esta API tem uma gama de operacoes basicas, como listagem de livros, criacao, busca por autor e titulo. Esta API ja esta pre-pronta, mas pode ser alterada de acordo com a sua necessidade, sem problemas.

Esta pasta possui um script **build.bash**, que builda a imagem docker a ser utilizada no **docker-compose.yml**.

E, a pasta **_frontend_**, onde devem ser colocados codigos do FE. Usamos o NextJS como framework de React, que já possui **_Server Components_** e **_Server Actions_**.

## Inicializacao

Clone o repositorio do Github, e va na pasta **_backend_**, e rode o script **_build.bash_**. Esse script ira buildar uma imagem docker local para o seu backend. Depois, va na pasta **_\_docker-compose_** e rode o script **_docker-up.bash_**, que ira subir o **docker-compose.yml**, subindo todos os servicos.

## Objetivos do Teste

O objetivo deste teste e criar uma aplicacao FE em NextJS que faz as operacoes basicas de CRUD, como listar, criar e deletar livros, alem de permitir buscar esses livros pelo titulo ou pelo autor.

O FE deve rodar junto com os outros servicos em docker, ou seja, deve ser adicionado um servico ao **docker-compose.yml** com o nome frontend. Para isso, o FE precisa de um **_Dockerfile_**, e de um script **_build.bash_**, como o servico da API.

**IMPORTANTE**: ao rodar o **docker-compose.yml**, o FE deve subir junto com os outros servicos.

## Objetivos do Projeto

O objetivo deste projeto é criar uma aplicação Frontend em Next.js que realize as operações básicas de CRUD, como listar, criar e deletar livros, além de permitir buscar esses livros pelo título ou pelo autor.

**IMPORTANTE**: ao executar o docker-compose.yml, o Frontend é iniciado junto com os outros serviços.

## Detalhes do projeto

Aqui vão os pontos principais do projeto:

- O FE possui uma imagem docker, e rodar junto com os outros servicos no **_docker-compose.yml_**
- O FE possui uma tela de listagem dos livros
- O FE possui uma tela de busca de livros por título
- O FE possui uma tela de busca de livros por autor
- O FE possui uma tela de criação de livros
- O FE possui uma função de de deletar livros
- As telas devem ser feitas usando componentes da biblioteca [shadcn/ui](https://ui.shadcn.com/)
- Uso do Typescript

### Criterios tecnicos

Além das funcionalidades do FE, os critérios técnicos abaixo também foram incluídos:

- Componentização:
  - Criação de componentes reutilizaveis
- Organização
  - Clareza e legibilidade do código
  - Comentários e documentação
  - Organização clara das pastas e arquivos
- Princípios
  - Clean Code
  - DRY
  - MVC
