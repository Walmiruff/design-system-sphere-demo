<h1 align="center">Bem vindo ao @dss/components/status-arrow 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Status arrow.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DssStatusArrowModule } from '@dss/components/status-arrow';

import { StatusArrowComponent } from './status-arrow.component';

@NgModule({
  declarations: [StatusArrowComponent],
  imports: [
    CommonModule,
    DssStatusArrowModule,
  ],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-arrow',
  templateUrl: './status-arrow.component.html',
})
export class StatusArrowComponent { }
```

###### `template`

###### `Default`

```html
<span dssStatusArrow></span>
<span dssStatusArrow direction="right"></span>
<span dssStatusArrow direction="bottom"></span>
<span dssStatusArrow direction="left"></span>
```

###### `Inputs`
Name      | Type   | Default | Obs                                             |
--------- | ------ | ------- | ----------------------------------------------- |
direction | string | top     | opções: top, right, bottom ou left.             |
status    | string | -       | opções: negative, positive, active ou disabled. |

## Executar testes

```shell
npm run test
```
