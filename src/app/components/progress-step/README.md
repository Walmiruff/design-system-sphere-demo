<h1 align="center">Bem vindo ao @dss/components/progress-step 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.3.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Progress step.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DssProgressStepModule } from '@dss/components/progress-step';

import { ProgressStepComponent } from './progress-step.component';

@NgModule({
  declarations: [ProgressStepComponent],
  imports: [
    CommonModule,
    DssProgressStepModule,
  ],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
})
export class ProgressStepComponent { }
```

###### `template`

```html
<dss-progress-step>
  <dss-progress-step-item>Etapa 1</dss-progress-step-item>
  <dss-progress-step-item>Etapa 2</dss-progress-step-item>
  <dss-progress-step-item>Etapa 3</dss-progress-step-item>
</dss-progress-step>
```

###### `Inputs - Progress Step`
Name        | Type    | Default | Obs |
----------- | ------- | ------- | --- |
activeSteps | number  | 1       | -   |
itemsNumber | boolean | false   | -   |
digitsInfo  | string  | 1.0-0   | -   |

## Executar testes

```shell
npm run test
```
