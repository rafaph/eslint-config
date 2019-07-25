# @rafph/eslint-config

Configuração compartilhada do Eslint para meus projetos pessoais e outros.

# Instalação

```bash
# peer dependencies
npm install --save-dev eslint

# package
npm install --save-dev @rafph/eslint-config
```

# Utilização

Na raiz do seu projeto javascript (mesmo nível do diretório `node_modules`), defina um arquivo `.eslintrc.js` com o
seguinte conteúdo:

```js
module.exports = {
  extends: '@rafph',
    env: {
    node: true,
    commonjs: true,
    browser: true
  }
};
```

* Como este projeto é uma extensão de [`eslint-config-semistandard`](https://github.com/Flet/eslint-config-semistandard)
, você pode encontrar mais importações na página do projeto.
* Mais informações sobre configurações compartilhadas podem ser encontradas na página do
[`eslint`](http://eslint.org/docs/developer-guide/shareable-configs).
