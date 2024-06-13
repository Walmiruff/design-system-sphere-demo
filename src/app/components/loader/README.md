<h1 align="center">Bem vindo ao @dss/components/loader 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Loader.

## Instalação

```shell
npm install lottie-web @dss/components
```

## Copiando os JSONs

Os JSONs são distribuídos com o Sphere e cada projeto pode definir a melhor maneira de carregar. Só é necessário manter a estrutura interna
para o carregamento correto das animações de feedback e com redução de movimento.

_A estrutura de pastas dos JSONs:_

```
├── assets
│   ├── dark/
│   │   ├── content-loader/
│   │   │   ├── default.json
│   │   │   ├── error.json
│   │   │   ├── success.json
│   ├── light/
│   │   ├── content-loader/
│   │   │   ├── default.json
│   │   │   ├── error.json
│   │   │   ├── success.json
```

A maneira mais simples é usar o `glob` no arquivo `angular.json`. O exemplo abaixo copia todos os arquivos da pasta _light_ (tema padrão do Sphere)
para o projeto com exceção dos loaders de página customizados:

```json
...
"assets": [
  "src/favicon.ico",
  "src/assets",
  ...
  {
    "glob": "**/*",
    "input": "./node_modules/@dss/components/loader/assets/light",
    "ignore": ["page-loader/custom"],
    "output": "assets"
  }
  ...
],
...
```

> Você deve carregar conforme o tema utilizado. Você pode usar a opção `ignore` que o Angular oferece para excluir os
> arquivos/pastas que não utilizar.

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DssAccordionModule } from '@dss/components/accordion';
import { DssButtonModule } from '@dss/components/button';
import { DssLoaderModule } from '@dss/components/loader';

import { ContentLoaderComponent } from './content-loader.component';
import { ContentLoaderFeedbackComponent } from './content-loader-feedback.component';

@NgModule({
  declarations: [
    ContentLoaderComponent,
    ContentLoaderFeedbackComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DssAccordionModule,
    DssButtonModule,
    DssLoaderModule,
  ],
})
export class LoaderModule {}
```
#### Loader de conteúdo

###### `component`

```ts
import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
})
export class ContentLoaderComponent {
  public show = false;

  public bodyAccordion: string | null = null;

  private _notifier = new Subject();

  public openAccordion(): void {
    this.show = true;

    timer(3000)
      .pipe(takeUntil(this._notifier))
      .subscribe(() => {
        this.bodyAccordion = 'Conteúdo carregado dinamicamente!';
        this.showDefault = false;
      });
  }

  public closeAccordion(): void {
    this._notifier.next();
    this.show = false;
    this.bodyAccordion = null;
  }
}
```

###### `template`

```html
<dss-accordion>
  <dss-accordion-item (opened)="openAccordion()" (closed)="closeAccordion()">
    <h1 dssAccordionItemTitle>Accordion</h1>
    <ng-container dssAccordionItemBody>
      {{ bodyAccordion }}
      <dss-content-loader [show]="show" path="assets/content-loader/default.json"></dss-content-loader>
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

#### Loader de conteúdo Em um Botão e com Feedback

###### `component`

```ts
import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-content-loader-feedback',
  templateUrl: './content-loader-feedback.component.html',
})
export class ContentLoaderFeedbackComponent {
  public showFeedbackError = false;

  public showFeedbackSuccess = false;

  public isError = false;

  public isSuccess = false;

  private _notifier = new Subject();

  public feedback(type: string): void {
    if (type === 'error' && !this.showFeedbackError) {
      this.showFeedbackError = true;
      this.isError = false;

      timer(3000)
        .pipe(takeUntil(this._notifier))
        .subscribe(() => {
          this.isError = true;
        });
    } else if (type === 'success' && !this.showFeedbackSuccess) {
      this.showFeedbackSuccess = true;
      this.isSuccess = false;

      timer(3000)
        .pipe(takeUntil(this._notifier))
        .subscribe(() => {
          this.isSuccess = true;
        });
    }
  }

  public clear(type: string): void {
    if (type === 'error') {
      this.showFeedbackError = false;
      this.isError = false;
    } else if (type === 'success') {
      this.showFeedbackSuccess = false;
      this.isSuccess = false;
    }

    this._notifier.next();
  }
}
```

###### `template`

```html
<button dssOutlineButton (click)="feedback('error')" style="width: 250px;">
  <dss-content-loader [show]="showFeedbackError" [isError]="isError" path="assets/content-loader/default.json">
    <dss-content-loader-text>Copiar número do cartão</dss-content-loader-text>
    <dss-content-loader-feedback>Não foi possível copiar</dss-content-loader-feedback>
  </dss-content-loader>
</button>
<br />
<button dssButton (click)="clear('error')" [disabled]="!isError">Reset botão de feedback - Erro</button>
<button dssFilledButton (click)="feedback('success')" style="width: 250px;">
  <dss-content-loader [show]="showFeedbackSuccess" [isSuccess]="isSuccess" [isContrast]="true" path="assets/content-loader/default.json">
    <dss-content-loader-text>Copiar número do cartão</dss-content-loader-text>
    <dss-content-loader-feedback>Número copiado</dss-content-loader-feedback>
  </dss-content-loader>
</button>
<br />
<button dssButton (click)="clear('success')" [disabled]="!isSuccess">Reset botão de feedback - Sucesso</button>
```

###### `Inputs`

| Name       | Type           | Default | Obs                                                                                |
| ---------- | -------------- | ------- | ---------------------------------------------------------------------------------- |
| id         | string         | -       |                                                                                    |
| show       | boolean        | false   | Controla a exibição do loader                                                      |
| path       | string ou null | null    | Caminho do arquivo JSON da animação do loader                                      |
| isContrast | boolean        | false   | No content-loader. Altera a cor do loader conforme o background onde ele for usado |
| isError    | boolean        | false   | No content-loader. Exibe o feedback de erro                                        |
| isSuccess  | boolean        | false   | No content-loader. Exibe o feedback de sucesso                                     |

###### `Componentes Estruturais/Decorator do dss-page-loader`

| Name                    | Type | Default | Obs                                                                                                                                |
| ----------------------- | ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| dss-page-loader-percent | -    | -       | Exibe o percentual de carregamento                                                                                                 |
| dss-page-loader-text    | -    | -       | Para adicionar textos extras ao loader. Use no máximo 3. Se o usuário ativar a redução de movimento apenas o primeiro será exibido |
| DssPageLoaderDecorator  | -    | -       |                                                                                                                                    |

###### `Componentes Estruturais do dss-content-loader`

| Name                        | Type | Default | Obs                                              |
| --------------------------- | ---- | ------- | ------------------------------------------------ |
| dss-content-loader-text     | -    | -       | Exibe o texto do botão antes do click do usuário |
| dss-content-loader-feedback | -    | -       | Exibe o texto de feedback                        |

## Executar testes

```shell
npm run test
```

- AFE - Time Sphere

---
