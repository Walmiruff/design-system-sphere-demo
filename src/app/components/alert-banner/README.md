<h1 align="center">Bem vindo ao @dss/components/alert-banner 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Alert Banner.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssAlertBannerModule } from '@dss/components/alert-banner';
import { DssButtonModule } from '@dss/components/button';

import { AlertBannerComponent } from './alert-banner.component';

@NgModule({
  declarations: [AlertBannerComponent],
  imports: [
    CommonModule,
    DssAlertBannerModule,
    DssButtonModule,
  ],
})
export class AlertBannerModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
})
export class AlertBannerComponent {

  public openInfo = false;

  public openWarning = false;

  public openDanger = false;

  public openSuccess = false;

}
```

###### `template`

###### `Info`

```html
<button dssFilledButton (click)="openInfo = true">Info</button>
<br>
<dss-alert-banner type="info" [open]="openInfo">
  Feedback Alert Information. Text goes right here.
  <dss-alert-banner-actions>
    <button dssButton (click)="openInfo = false">Ignorar</button>
    <button dssButton>Ir</button>
  </dss-alert-banner-actions>
</dss-alert-banner>
```

###### `Aviso`

```html
<button dssFilledButton (click)="openWarning = true">Aviso</button>
<br>
<dss-alert-banner type="warning" [open]="openWarning">
  Feedback Alert Warning. Text goes right here.
  <dss-alert-banner-actions>
    <button dssButton (click)="openWarning = false">Ignorar</button>
    <button dssButton>Ir</button>
  </dss-alert-banner-actions>
</dss-alert-banner>
```

###### `Perigo`

```html
<button dssFilledButton (click)="openDanger = true">Perigo</button>
<br>
<dss-alert-banner type="danger" [open]="openDanger">
  Feedback Alert Danger. Text goes right here.
  <dss-alert-banner-actions>
    <button dssButton (click)="openDanger = false">Ignorar</button>
    <button dssButton>Ir</button>
  </dss-alert-banner-actions>
</dss-alert-banner>
```

###### `Sucesso`

```html
<button dssFilledButton (click)="openSuccess = true">Success</button>
<br>
<dss-alert-banner type="success" [open]="openSuccess">
  Feedback Alert Success. Text goes right here.
  <dss-alert-banner-actions>
    <button dssButton (click)="openSuccess = false">Ignorar</button>
    <button dssButton>Ir</button>
  </dss-alert-banner-actions>
</dss-alert-banner>
```

###### `Inputs`
Name | Type    | Default | Obs                                       |
---- | ------- | ------- | ----------------------------------------- |
type | string  | -       | Opções: danger, info, success or warning. |
open | boolean | false   | -                                         |

###### `Structural Components`
Name                     | Type | Default  | Obs |
------------------------ | ---- | -------- | --- |
dss-alert-banner-actions | -    | -        | -   |

## Executar testes

```shell
npm run test
```
