<h1 align="center">Bem vindo ao @dss/components/icon 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Icon.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssIconModule } from '@dss/components/icon';

import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    DssIconModule,
  ],
})
export class IconModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {}
```

###### `template`

```html
<span dssIcon name="calendar"></span>
```

###### `Inputs`

| Name   | Type    | Default | Obs                                                                     |
| ------ | ------- | ------- | ----------------------------------------------------------------------- |
| name   | string  | -       | [click here](https://) para procurar por nomes                          |
| size   | string  | 24px    | opções: small (16px), medium (32px), large (40px) ou extra-large (48px) |
| rtlt   | string  | right   | opções: right ou left                                                   |
| action | boolean | false   | altera o cursor para pointer                                            |
| hover  | boolean | false   | altera o background-color no hover                                      |

## Executar testes

```shell
npm run test
```
