<h1 align="center">Bem vindo ao @dss/components/pagination 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Pagination.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssPaginationModule } from '@dss/components/pagination';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    DssPaginationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {}
```

###### `template`

```html
<dss-pagination></dss-pagination>
```

###### `Inputs`

| Name              | Type                               | Default          | Obs                                                           |
| ----------------- | ---------------------------------- | ---------------- | ------------------------------------------------------------- |
| label             | string ou Observable&lt;string&gt; | Itens por Página | Texto do `dss-option-button` usado dentro do `dss-pagination` |
| optionDefault     | string                             | 30               | opções: 10, 30, 50 ou 100                                     |
| pageCount         | number                             | 5                | -                                                             |
| selected          | number                             | 1                | Seleciona uma página                                          |
| hasIconInitAndEnd | boolean                            | false            | Navegação direta para a página inicial e final                |

###### `Outputs`

| Name               | Type                       | Obs                |
| ------------------ | -------------------------- | ------------------ |
| itemsPageChange    | EventEmitter&lt;number&gt; | 10, 30, 50 ou 100  |
| selectedPageChange | EventEmitter&lt;number&gt; | Página selecionada |

## Executar testes

```shell
npm run test
```
