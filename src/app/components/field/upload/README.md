<h1 align="center">Bem vindo ao @dss/components/upload 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Upload.

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

import { DssUploadModule } from '@dss/components/upload';

import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssUploadModule,
  ],
  exports: [UploadComponent],
})
export class UploadModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  public files: any;
}
```

###### `template`

```html
<dss-upload name="file" [(ngModel)]="files"></dss-upload>
```

###### `Inputs`

| Name         | Type                      | Default                    | Obs |
| ------------ | ------------------------- | -------------------------- | --- |
| arrayOfFiles | Array&lt;File&gt; ou null | []                         | -   |
| label        | string                    | -                          | -   |
| icon         | DssIconNameType           | -                          | -   |
| title        | string                    | Nenhum arquivo selecionado | -   |
| accept       | string                    | -                          | -   |
| multiple     | boolean                   | true                       | -   |
| disabled     | boolean                   | false                      | -   |
| name         | string                    | -                          | -   |
| maxFileSize  | number                    | -                          | -   |
| fileLimit    | number                    | -                          | -   |

###### `Outputs`

| Name               | Type                                    | Obs                                      |
| ------------------ | --------------------------------------- | ---------------------------------------- |
| change             | EventEmitter&lt;FileList&gt;            | @deprecated, use o evento `uploadChange` |
| uploadChange       | EventEmitter&lt;FileList&gt;            | -                                        |
| arrayOfFilesChange | EventEmitter&lt;Array&lt;File&gt;&gt;   | -                                        |
| errorInUpload      | EventEmitter&lt;Array&lt;string&gt;&gt; | -                                        |

## Executar testes

```shell
npm run test
```
