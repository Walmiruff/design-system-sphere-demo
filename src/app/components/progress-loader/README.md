<h1 align="center">Bem vindo ao @dss/components/progress-loader 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.6.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Progress Loader.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssProgressLoaderModule } from '@dss/components/progress-loader';

import { ProgressLoaderComponent } from './progress-loader.component';

@NgModule({
  declarations: [ProgressLoaderComponent],
  imports: [
    CommonModule,
    DssProgressLoaderModule,
  ],
})
export class ProgressLoaderModule { }
```

###### `component`

```ts
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class ProgressLoaderComponent {

  public value: number = 50;

  public isError = false;

  public isSuccess = false;

}
```

###### `template`

```html
<dss-progress-loader [isError]="isError" [isSuccess]="isSuccess" [value]="value">
  <span *ngIf="!isSuccess">Carregando... {{ (value / 100) | percent }}</span>
  <span *ngIf="isSuccess">Upload feito com sucesso!</span>
</dss-progress-loader>
```

###### `Inputs`
Name      | Type     | Default | Obs |
--------- | -------- | ------- | --- |
value     | number   | -       | -   |
isError   | boolean  | false   | -   |
isSuccess | boolean  | false   | -   |
hasIcon   | boolean  | true    | -   |

## Executar testes

```shell
npm run test
```
