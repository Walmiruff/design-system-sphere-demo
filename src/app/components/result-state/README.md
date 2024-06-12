<h1 align="center">Bem vindo ao @dss/components/result-state 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.6.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Result State.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';
import { DssResultStateModule } from '@dss/components/result-state';
import { DssStatusIconModule } from '@dss/components/status-icon';

import { ResultStateComponent } from './result-state.component';

@NgModule({
  declarations: [ResultStateComponent],
  imports: [
    CommonModule,
    DssButtonModule,
    DssIconModule,
    DssResultStateModule,
    DssStatusIconModule,
  ],
})
export class ResultStateModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-result-state',
  templateUrl: './result-state.component.html',
})
export class ResultStateComponent {}
```

###### `template`

###### `Padrão`

```html
<dss-result-state>
  <span dssIcon name="accelerator" size="large"></span>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

###### `Sem Ícone`

```html
<dss-result-state>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

###### `Erro`

```html
<dss-result-state>
  <span dssStatusIcon type="danger"></span>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

###### `Info`

```html
<dss-result-state>
  <span dssStatusIcon type="info"></span>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

###### `Aviso`

```html
<dss-result-state>
  <span dssStatusIcon type="warning"></span>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

###### `Sucesso`

```html
<dss-result-state>
  <span dssStatusIcon type="success"></span>
  <dss-result-state-title>Result State</dss-result-state-title>
  <dss-result-state-content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</dss-result-state-content>
  <dss-result-state-actions>
    <button dssButton>Link</button>
  </dss-result-state-actions>
</dss-result-state>
```

## Executar testes

```shell
npm run test
```
