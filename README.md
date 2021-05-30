# Api cotação dolar por data com graphql
> Esse microserviço consultar a cotação do dolar de uma determinada data. Além de consultar a data, ele mante o historico de consultas e suas respectivas cotações de acordo com a data do pedido.

## Architecture cotacaodolar-api

![](/doc/img/modelo-arquitetura.png)

## Objetivos
<ol>
  <li>Desenvolver Api em Node.js (obrigatório)</li>
  <li>Desejável utilizar Typescript, Graphql-yoga, Typeorm</li>
  <li>Consultar datos de https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios</li>
  <li>Gravar no Banco de dados (postgre, mysql, mongo, pode escolher)</li>
</ol>

## Objetivos concluídos

- [x] Desenvolver Api em Node.js (obrigatório)
- [x] Desejável utilizar Typescript, Graphql-yoga, Typeorm
- [x] Consultar datos de https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios
- [x] Gravar no Banco de dados (postgre, mysql, mongo, pode escolher)


## Pré-requisitos

Execute os seguintes comandos para instalar o npm:

```sh
$ sudo apt install nodejs
```

Para a utilização dessa api, você precisará ter o postgres instalado. Para isso, execute os comandos abaixos.

```sh
$ sudo apt install postgresql postgresql-contrib
```

## Installation

Dentro da diretorio do projeto execute os seguintes comandos:

```sh
npm install
```
Esse comando será responsavel por criar as tabelas necessarias para a utilização da api. Por isso, crie um banco de dados postgres e altere no arquivo `ormconfig.json` as informações do seu banco. Após isso, execute os seguintes comandos.

```sh
npm run typeorm migration:run
```

## Running

Para executar a aplicação em modo de desenvolvimento basta executar os comandos abaixo:

```sh
npm run dev
```

## Usage example

A api foi desenvolvida em graphql, dessa maneira as requisições serão feitas para o recurso `/graphql` com o verbo `POST`. Para utilizar o unico recurso desenvolvido por essa api, basta enviar uma requisição do tipo query, com os seguintes dados:

````
query {
  cotacaoDolar(date: "05-28-2021"){
    ...on CotacaoDolar {
      cotacaoVenda
    }
    ...on CotacaoDolarError {
      message
      statusCode
    }
  }
}
````
