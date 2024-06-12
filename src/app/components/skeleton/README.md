<h1 align="center">Bem vindo ao @dss/components/skeleton 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.6.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Skeleton.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssSkeletonModule } from '@dss/components/skeleton';

import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    DssSkeletonModule,
  ],
})
export class SkeletonModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent { }
```

###### `template`

###### `Padrão`

```html
<dss-skeleton></dss-skeleton>
```

###### `Quadrado`

```html
<dss-skeleton style="margin-right: 16px;" type="square" size="small" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="square" size="default"></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="square" size="medium" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="square" size="large" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="square" size="extra-large" ></dss-skeleton>
```

###### `Círculo`

```html
<dss-skeleton style="margin-right: 16px;" type="circle" size="small" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="circle" size="default" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="circle" size="medium" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="circle" size="large" ></dss-skeleton>
<dss-skeleton style="margin-right: 16px;" type="circle" size="extra-large" ></dss-skeleton>
```

###### `Título`

```html
<dss-skeleton type="title"></dss-skeleton>
```

###### `Parágrafo`

```html
<dss-skeleton type="paragraph"></dss-skeleton>
```

###### `Lista`

```html
<dss-skeleton type="list"></dss-skeleton>
```

###### `Sem animação`

```html
<dss-skeleton [animate]="false"></dss-skeleton>
```

###### `Faça você mesmo`

```html
<div style="width: 288px;">
  <dss-skeleton height="200px" style="margin-bottom: 24px;"></dss-skeleton>
  <dss-skeleton type="paragraph"></dss-skeleton>
  <div style="display: flex; justify-content: center; margin-top: 16px; padding: 16px;">
    <dss-skeleton type="square" width="100px" height="48px"></dss-skeleton>
    <dss-skeleton type="square" width="100px" height="48px" style="margin-left: 16px;"></dss-skeleton>
  </div>
</div>
```

###### `Inputs`
Name       | Type    | Default | Obs                                                                             |
---------- | ------- | ------- | ------------------------------------------------------------------------------- |
type       | string  | -       | opções: square, circle, title, paragraph ou list.                               |
size       | string  | -       | opções: small, default, medium, large ou extra-large. Use com square ou circle. |
width      | string  | 100%    | -                                                                               |
height     | string  | 24px    | -                                                                               |
numberRows | number  | 3       | -                                                                               |
animate    | boolean | true    | -                                                                               |

## Executar testes

```shell
npm run test
```
