<h1 align="center">Bem vindo ao @dss/components/status-circle 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Status Circle.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DssStatusCircleModule } from '@dss/components/status-circle';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DssStatusCircleModule,
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
  templateUrl: './app.component.html',
})
export class AppComponent { }
```

###### `template`

```html
<span dssStatusCircle></span>
<span dssStatusCircle type="active"></span>
<span dssStatusCircle type="disabled"></span>
```

###### `Inputs`
Name | Type   | Default | Obs                        |
---- | ------ | ------- | -------------------------- |
type | string | -       | opções: active ou disabled |

## Executar testes

```shell
npm run test
```
