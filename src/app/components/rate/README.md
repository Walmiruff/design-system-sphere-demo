<h1 align="center">Bem vindo ao @dss/components/rate 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.8.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Rate.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssRateModule } from '@dss/components/rate';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DssRateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { }
```

###### `template`

###### `Default`

```html
<dss-rate (rate)="numberRate = $event"></dss-rate>
```

###### `Inputs`
Name          | Type   | Default     | Obs                                                                       |
------------- | ------ | ----------- | ------------------------------------------------------------------------- |
selectedValue | string | -           | Inicia o componente com o número de estrelas selecionados. Opções: 1 a 5. |
nameDssIcon   | string | star-filled | Nome do ícone.                                                            |

###### `Outputs`
Name | Type                       | Obs                 |
---- | -------------------------- | ------------------- |
rate | EventEmitter&lt;number&gt; | Número selecionado. |

## Run tests

```shell
npm run test
```

## Executar testes

```shell
npm run test
```
