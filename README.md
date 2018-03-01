# The UX Library

O aplicativo **The UX Library** lista para você todos links mais relevantes UX para você.

## Começando usar

### Pré-requisitos

Para começar primeiro você deverá clonar ou fazer o download do repositório.

Você também deve ter node.js e npm instalados na seu computador.

Para baixar o [node.js](https://nodejs.org/en/) basta clicar no link, geralmente o npm é instalado junto com o node.js.

### Instalando

O primeiro passo que deve seguir para executar o projeto é instalar todas as dependências do mesmo.

Os comandos a seguir devem fazer isso para você.

```
npm install
```

### Tarefas Gulp.js

Lista de tarefas inclusas em `tasks`.
  - `images.js` responsável copiar e otimizar imagens para pasta `dist/assets/images`.
  - `javascripts.js` concatena todas arquivos inclusos em `app/src/**/*.js`, compila e gera um bundle minificado.
  - `pug.js` concatena todas arquivos inclusos em `app/static/templates/**/*.pug`, compila e gera um HTML final.
  - `server.js` inicia servidor local com Browser Sync.
  - `stylus.js` compila arquivos `.styl` para `.css`.
  - `watch.js` observa mudanças no código.

## Iniciando com Gulp.js

Neste projeto é utilizado `gulp.js` para automatizar tarefas rotineiras.

Comandos para iniciar seu `gulpfile.babel.js`.
  - `gulp` para executar a tarefa `default`.
  - `gulp images` para otimizar as imagens
  - `gulp javascripts` para compilar arquivos `.js`
  - `gulp pug` para compilar arquivos `.pug`
  - `gulp browserSync` para iniciar o servidor local
  - `gulp stylus` para compilar arquivos `.styl`
  - `gulp watch` para iniciar observador de alterações no código

Ou você pode simplesmente digitar

```
npm run start
```

* Após iniciar a tarefa `default` do gulp ou utilizar `npm run start`, serão disponibilizados dois links para acessar o projeto.
- Local: <http://localhost:3000/>
- Externo: <http://your-ip:3000/>

## Executando ESLint

Este projeto utiliza ESLint para pegar erros no código de arquivos Javascript.

Para executar o ESLint.

```
npm run lint
```

### Estrutura da pasta `app`

Abaixo a estrutura de pastas.

```sh
├── app
│   ├── src
│   │    ├── components
│   │    ├── utils
│   │    └── app.js
│   └── static
│        ├── images
│        │    └── svg
│        ├── stylesheets
│        │    ├── base
│        │    ├── components
│        │    ├── config
│        │    ├── layout
│        │    │     ├── includes
│        │    │     ├── section
│        │    │     └── views
│        │    └── application.styl
│        └── templates
│               ├── components
│               ├── includes
│               ├── mixins
│               ├── views
│               └── index.pug
```

## Desenvolvido com

* [PUG Template Engine](https://pugjs.org/api/getting-started.html) - Template engine de alta performance baseado no Haml.
* [Browser Sync](https://browsersync.io/) - Teste de navegador sincronizado que economiza tempo.
* [Gulp.js](https://gulpjs.com/) - Automatize e aprimore seu fluxo de trabalho.
* [Babel](http://babeljs.io/) - O compilador de Javascript.
* [ESLint](https://eslint.org/) - Linter para código Javascript.
* [Stylus](http://stylus-lang.com/) - CSS exoressuvi, dinâmico e robusto.
* [Browserify](http://browserify.org/) - Browserify permite exigir ('módulos') no navegador agrupando todas as suas dependências.

## Desenvolvimento

Este projeto foi desenvolvido com muito <3 e Javascript.

## Créditos

* [Free Vector icons](https://www.flaticon.com/) - Repositório de icones gratuitos onde foram encontrados os icones em SVG utilizados no projeto.
* [Google Fonts](https://fonts.google.com/) - Repositório de fontes gratuitas onde foi encontrada a fonte utilizada no projeto.
