<div align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Documentation" src="https://img.shields.io/badge/documentation-no-red.svg" />
  <a href="https://lerna.js.org/" target="_blank">
      <img alt="Maintained with Lerna" src="https://img.shields.io/badge/maintained%20with-lerna-orange.svg" />
  </a>
</div>

> Design System Sphere

## Comandos

#### Instalação

Após publicar o pacotes do Design System em seu repositorio privado.

```shell
npm install @dss/components
```

```shell
npm install @dss/style
```

#### Pacote @angular/cdk

> Alguns componentes precisam do pacote **_@angular/cdk_**,
> então é necessário instalar a versão conforme a versão do angular que estiver usando.

## Usando

##### `angular.json`

```json
...
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "./node_modules/@dss/style",
    "output": "assets"
  }
],
"styles": [
  "./node_modules/@dss/style/css/fonts.min.css",
  "./node_modules/@dss/style/css/icons.min.css",
  "./node_modules/@dss/style/css/only-style.min.css",
  "./src/styles.css"
],
...
```

> Use only-style.min.css para o CSS padrão
> Você pode importar o estilo e as fontes em uma única importação,
> basta usar style.min.css
> (o arquivo fonts.min.css não é necessário)

## Componentes

- [Accordion](./src/app/components/accordion/README.md)
- [Alert Banner](./src/app/components/alert-banner/README.md)
- [Alert Toast](./src/app/components/alert-toast/README.md)
- [Avatar](./src/app/components/avatar/README.md)
- [Background Status](./src/app/components/background-status/README.md)
- [Badge](./src/app/components/badge/README.md)
- [Breadcrumb](./src/app/components/breadcrumb/README.md)
- [Button](./src/app/components/button/README.md)
- [Calendar](./src/app/components/calendar/README.md)
- [Card (Base)](./src/app/components/card/README.md)
- [Card Option](./src/app/components/card-option/README.md)
- [Carousel](./src/app/components/carousel/README.md)
- [Cascader](./src/app/components/cascader/README.md)
- [Chat](./src/app/components/chat/README.md)
- [Checkbox](./src/app/components/checkbox/README.md)
- [Container](./src/app/components/container/README.md)
- [Countdown](./src/app/components/countdown/README.md)
- [Data Table](./src/app/components/data-table/README.md)
- [Datepicker/Datepicker Range](./src/app/components/datepicker/README.md)
- [Dialog](./src/app/components/dialog/README.md)
- [Divider](./src/app/components/divider/README.md)
- [Download](./src/app/components/download/README.md)
- [Drawer](./src/app/components/drawer/README.md)
- [Dropdown](./src/app/components/dropdown/README.md)
- [Flyout Menu](./src/app/components/flyout-menu/README.md)
- [Form Field](./src/app/components/form-field/README.md)
  - [Input](./src/app/components/form-field/README.md#input)
  - [Textarea](./src/app/components/form-field/README.md#textarea)
  - [Dropdown (Select)](./src/app/components/dropdown/README.md)
- [Grid](./src/app/components/grid/README.md)
- [Header](./src/app/components/header/README.md)
- [I18n](./src/app/components/i18n/README.md)
- [Icon](./src/app/components/icon/README.md)
- [Input Number](./src/app/components/input-number/README.md)
- [List](./src/app/components/list/README.md)
- [Loader](./src/app/components/loader/README.md)
- [Logo](./src/app/components/logo/README.md)
- [Mask](./src/app/components/mask/README.md)
- [Menu](./src/app/components/menu/README.md)
- [Notify](./src/app/components/notify/README.md)
- [Option](./src/app/components/option/README.md)
- [Option Button](./src/app/components/option-button/README.md)
- [Page Menu](./src/app/components/page-menu/README.md)
- [Pagination](./src/app/components/pagination/README.md)
- [Position](./src/app/components/position/README.md)
- [Product Card](./src/app/components/product-card/README.md)
- [Progress Loader](./src/app/components/progress-loader/README.md)
- [Progress Step](./src/app/components/progress-step/README.md)
- [Radio Group](./src/app/components/radio-group/README.md)
- [Rate](./src/app/components/rate/README.md)
- [Result State](./src/app/components/result-state/README.md)
- [Scrollbar](./src/app/components/scrollbar/README.md)
- [Search Bar](./src/app/components/search-bar/README.md)
- [Segment Control (tab)](./src/app/components/segment-control/README.md)
- [Skeleton](./src/app/components/skeleton/README.md)
- [Slider](./src/app/components/slider/README.md)
- [Statistic](./src/app/components/statistic/README.md)
- [Status Arrow](./src/app/components/status-arrow/README.md)
- [Status Bar](./src/app/components/status-bar/README.md)
- [Status Circle](./src/app/components/status-circle/README.md)
- [Status Icon](./src/app/components/status-icon/README.md)
- [Tag](./src/app/components/tag/README.md)
- [Toggle](./src/app/components/toggle/README.md)
- [Tooltip](./src/app/components/tooltip/README.md)
- [Treeview](./src/app/components/treeview/README.md)
- [Typography](./src/app/components/typography/README.md)
- [Upload](./src/app/components/upload/README.md)

> [Clique aqui para visualizar os componentes](https://design-system-sphere.web.app/).

> [Clique aqui para acessar o portal de documentação](https://github.com/Walmiruff/design-system-sphere-demo/blob/main/README.md).
