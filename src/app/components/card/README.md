<h1 align="center">Bem vindo ao @dss/components/card 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Card.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssCardModule } from '@dss/components/card';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    DssCardModule,
  ],
})
export class CardModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent { }
```

###### `template`

```html
<div dssCard>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus quidem voluptatem? Ab cumque, eos fugit iusto sapiente sequi veniam. Accusamus assumenda corporis esse, iure nesciunt numquam omnis perferendis quas!
</div>
```

###### `Inputs`
Name | Type   | Default | Obs              |
---- | ------ | ------- | ---------------- |
type | string | -       | opção: selected  |

## Executar testes

```shell
npm run test
```
