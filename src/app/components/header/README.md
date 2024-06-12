<h1 align="center">Bem vindo ao @dss/components/header 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.8.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Header.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssHeaderModule } from '@dss/components/header';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    DssHeaderModule,
  ],
})
export class HeaderModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent { }
```

###### `template`

```html
<header dssHeader></header>
```

> A diretiva serve apenas como base para que sejam montados os headers de acordo com cada jornada.

## Executar testes

```shell
npm run test
```
