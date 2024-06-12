<h1 align="center">Bem vindo ao Utilitário - Position 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.15.0-blue.svg?cacheSeconds=2592000" />
</p>

> Utilitário - Position

## Instalação

> Basta ter realizado os `imports` padrões dos [styles].

## Começado

### Default

```html
<div class="dss-position-relative">
  <div class="dss-position-absolute dss-top-0 dss-left-0"></div>
  <div class="dss-position-absolute dss-top-0 dss-right-0"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-50"></div>
  <div class="dss-position-absolute dss-bottom-50 dss-right-50"></div>
  <div class="dss-position-absolute dss-bottom-0 dss-left-0"></div>
  <div class="dss-position-absolute dss-bottom-0 dss-right-0"></div>
</div>
```



### Centro (Fora do Container)

```html
<div class="dss-position-relative">
  <div class="dss-position-absolute dss-top-0 dss-left-0 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-0 dss-left-50 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-0 dss-left-100 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-0 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-50 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-100 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-100 dss-left-0 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-100 dss-left-50 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-100 dss-left-100 dss-translate-middle"></div>
</div>
```



### Centro (Dentro do Container)

```html
<div class="dss-position-relative">
  <div class="dss-position-absolute dss-top-0 dss-left-0"></div>
  <div class="dss-position-absolute dss-top-0 dss-left-50 dss-translate-middle-x"></div>
  <div class="dss-position-absolute dss-top-0 dss-right-0"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-0 dss-translate-middle-y"></div>
  <div class="dss-position-absolute dss-top-50 dss-left-50 dss-translate-middle"></div>
  <div class="dss-position-absolute dss-top-50 dss-right-0 dss-translate-middle-y"></div>
  <div class="dss-position-absolute dss-bottom-0 dss-left-0"></div>
  <div class="dss-position-absolute dss-bottom-0 dss-left-50 dss-translate-middle-x"></div>
  <div class="dss-position-absolute dss-bottom-0 dss-right-0"></div>
</div>
```



## Classes

Classe                | Propriedade        |
--------------------- | ------------------ |
dss-position-static   | position: static   |
dss-position-relative | position: relative |
dss-position-absolute | position: absolute |
dss-position-fixed    | position: fixed    |
dss-position-sticky   | position: sticky   |

### Top, Right, Bottom e Left

As classes utilizam o formato a seguir:

* `[prefixo]-[propriedade]-[valor]`, por exemplo, `dss-top-0`, `dss-right-50`, `dss-bottom-100`, `dss-left-0`.

### Translate Middle

* `dss-translate-middle`, `dss-translate-middle-x` ou `dss-translate-middle-y`.

