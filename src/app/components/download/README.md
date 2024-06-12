<h1 align="center">Bem vindo ao @dss/components/download 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.20.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Download.

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
import { DssDownloadModule } from '@dss/components/download';

import { DownloadComponent } from './download.component';

@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    DssDownloadModule,
    DssButtonModule,
  ],
})
export class DownloadModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
})
export class DownloadComponent { }
```

###### `template`

###### `Default`

```html
<dss-download>
  <dss-download-title>Título do download com limite de apenas duas linhas</dss-download-title>
  <dss-download-description>Especificação – Peso do arquivo</dss-download-description>
  <button dssOutlineButton>Fazer download</button>
</dss-download>
```

###### `List`

```html
<dss-download>
  <dss-download-title>Título do download com limite de apenas duas linhas</dss-download-title>
  <dss-download-item>
    <dss-download-title>Nome do arquivo para download</dss-download-title>
    <dss-download-description>Especificação – Peso do arquivo</dss-download-description>
    <button dssButton>Baixar</button>
  </dss-download-item>
  <dss-download-item>
    <dss-download-title>Nome do arquivo para download</dss-download-title>
    <dss-download-description>Especificação – Peso do arquivo</dss-download-description>
    <button dssButton>Baixar</button>
  </dss-download-item>
  <dss-download-item>
    <dss-download-title>Nome do arquivo para download</dss-download-title>
    <dss-download-description>Especificação – Peso do arquivo</dss-download-description>
    <button dssButton>Baixar</button>
  </dss-download-item>
  <button dssOutlineButton>Fazer download</button>
</dss-download>
```

## Executar testes

```shell
npm run test
```
