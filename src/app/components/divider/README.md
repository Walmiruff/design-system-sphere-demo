<h1 align="center">Bem vindo ao @dss/components/divider 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Divider.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssDividerModule } from '@dss/components/divider';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DssDividerModule,
  ],
  bootstrap: [AppComponent],
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

```html
<hr dssDivider>
<hr dssDivider type="1">
<hr dssDivider type="2">
<hr dssDivider type="3">
```

###### `Inputs`
Name | Type   | Default | Obs               |
---- | ------ | ------- | ----------------- |
type | string | -       | opções: 1, 2 ou 3 |

## Executar testes

```shell
npm run test
```
