# Fiat Uno Election
Sistema de votação desenvolvido em Node usando Express, Knex e SQLite. Há uma versão do backend hospedada no Heroku portando você pode visitar o site [clicando aqui](https://antoniopedro9.github.io/fiat-uno-election/client/index.html). Caso deseje rodar a aplicação na sua máquina siga os passos abaixo.

## Dependências

Dentro da pasta "server" rode os seguintes comandos no termial:
```
> npm install
```
```
> npm run migrations
```
```
> npm run seeds
```

## Iniciando o servidor
Dentro arquivo "api.js" no diretório "/client/js/" altere a URL para ```http://localhost:3000```
```
const api = axios.create({
	baseURL: "http://localhost:3000",
});

```

Dentro da pasta "server" rode o seguinte comando no termial:
```
> npm start
```
