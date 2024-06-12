<h1 align="center">Bem vindo ao @dss/components/toggle 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Toggle.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DssToggleModule } from '@dss/components/toggle';

import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssToggleModule,
  ],
  exports: [ToggleComponent],
})
export class ToggleModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  public toggle = false;
}
```

###### `template`

```html
<dss-toggle label="Toggle" [(ngModel)]="toggle"></dss-toggle>
```

###### `Inputs`

| Name     | Type    | Default | Obs |
| -------- | ------- | ------- | --- |
| value    | string  | -       | -   |
| name     | string  | -       | -   |
| label    | string  | -       | -   |
| id       | string  | uuid    | -   |
| required | boolean | -       | -   |
| checked  | boolean | false   | -   |
| disabled | boolean | false   | -   |
| tabIndex | string  | 0       | -   |

###### `Outputs`

| Name   | Type                                | Obs |
| ------ | ----------------------------------- | --- |
| change | EventEmitter&lt;DssToggleChange&gt; | -   |
| blur   | EventEmitter&lt;Event&gt;           | -   |
| focus  | EventEmitter&lt;Event&gt;           | -   |

###### `Support Classes`

| Name            | Type                                             | Default | Obs |
| --------------- | ------------------------------------------------ | ------- | --- |
| DssToggleChange | { source: DssToggleComponent, checked: boolean } | -       | -   |

## Executar testes

```shell
npm run test
```
