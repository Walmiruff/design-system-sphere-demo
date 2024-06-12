<h1 align="center">Bem vindo ao @dss/components/product-card 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Product Card.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DssButtonModule } from '@dss/components/button';
import { DssProductCardModule } from '@dss/components/product-card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DssButtonModule,
    DssProductCardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { }
```

###### `template`

##### `Padrão`

```html
<dss-product-card>
  <dss-product-card-title>Title Product Card</dss-product-card-title>
  <dss-product-card-content>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias animi aperiam, aspernatur beatae deleniti dignissimos, eos eveniet ex explicabo in libero nesciunt non provident, quasi repellat tempore totam?</p>
  </dss-product-card-content>
  <dss-product-card-actions>
    <button dssOutlineButton>Cancelar</button>
    <button dssFilledButton style="margin-left: 16px">Salvar</button>
  </dss-product-card-actions>
</dss-product-card>
```

##### `Com Imagem`

```html
<dss-product-card>
  <img dssProductCardImg src="assets/img/product-card.png" alt="Imagem 640x480">
  <dss-product-card-title>Title Product Card</dss-product-card-title>
  <dss-product-card-content>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias animi aperiam, aspernatur beatae deleniti dignissimos, eos eveniet ex explicabo in libero nesciunt non provident, quasi repellat tempore totam?</p>
  </dss-product-card-content>
  <dss-product-card-actions>
    <button dssOutlineButton>Cancelar</button>
    <button dssFilledButton style="margin-left: 16px">Salvar</button>
  </dss-product-card-actions>
</dss-product-card>
```

###### `Structural Components`
Name                     | Type | Default  | Obs |
------------------------ | ---- | -------- | --- |
dss-product-card         | -    | -        | -   |
dss-product-card-title   | -    | -        | -   |
dss-product-card-content | -    | -        | -   |
dss-product-card-actions | -    | -        | -   |

###### `Directives`
Name              | Type | Default  | Obs                                    |
----------------- | ---- | -------- | -------------------------------------- |
dssProductCardImg | -    | -        | Diretiva para ser usada com a tag img. |

## Executar testes

```shell
npm run test
```
