<h1 align="center">Bem vindo ao @dss/components/badge 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.8.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Badge.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssBadgeModule } from '@dss/components/badge';
import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';

import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    DssBadgeModule,
    DssIconModule,
    DssButtonModule,
  ],
})
export class BadgeModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent { }
```

###### `template`

###### `Em Botões`

```html
<button dssButton dssBadge="1">Button Text</button>
<button dssFilledButton dssBadge="2">Button Primary</button>
<button dssOutlineButton dssBadge="3">Button Secondary</button>
```

###### `Em Ícones`

```html
<span dssIcon name="block-in-a-circle" size="small" dssBadge="4"></span>
<span dssIcon name="block-in-a-circle" dssBadge="5"></span>
<span dssIcon name="block-in-a-circle" size="medium" dssBadge="6"></span>
<span dssIcon name="block-in-a-circle" size="large" dssBadge="7"></span>
<span dssIcon name="block-in-a-circle" size="extra-large" dssBadge="8"></span>
```

###### `Em Texto`

```html
<p dssTypography type="body">
  <span dssBadge="9">Text with a badge</span>
</p>
```

###### `Inputs`
Name     | Type                              | Default | Obs                              |
-------- | --------------------------------- | ------- | -------------------------------- |
id       | string                            | uuid    | -                                |
type     | string                            | default | opções: default, dark or success |
dssBadge | string, number, undefined or null | default | recebe o conteúdo                |

## Executar testes

```shell
npm run test
```
