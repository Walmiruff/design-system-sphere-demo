<h1 align="center">Bem vindo ao @dss/components/status-icon 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Status Icon.

## Instalação

```sh
npm install @dss/components
```

## Usando

###### `module`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DssStatusIconModule } from '@dss/components/status-icon';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DssStatusIconModule,
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
<span dssStatusIcon type="danger"></span>
<span dssStatusIcon type="info"></span>
<span dssStatusIcon type="success"></span>
<span dssStatusIcon type="warning"></span>
```

###### `Inputs`
Name | Type   | Default | Obs                                       |
---- | ------ | ------- | ----------------------------------------- |
type | string | -       | opções: danger, info, success ou warning. |

## Executar testes

```sh
npm run test
```
