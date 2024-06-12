<h1 align="center">Bem vindo ao @dss/components/status-bar 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Status Bar.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DssStatusBarModule } from '@dss/components/status-bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DssStatusBarModule,
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
<span dssStatusBar></span>
<span dssStatusBar type="active"></span>
```

###### `Inputs`
Name | Type   | Default | Obs           |
---- | ------ | ------- | ------------- |
type | string | -       | opção: active |

## Executar testes

```shell
npm run test
```
