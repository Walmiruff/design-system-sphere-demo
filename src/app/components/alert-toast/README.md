<h1 align="center">Bem vindo ao @dss/components/alert-toast 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.10.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Alert Toast.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssAlertToastModule } from '@dss/components/alert-toast';
import { DssButtonModule } from '@dss/components/button';

import { AlertToastComponent } from './alert-toast.component';

@NgModule({
  declarations: [AlertToastComponent],
  imports: [
    CommonModule,
    DssAlertToastModule,
    DssButtonModule,
  ],
})
export class AlertToastModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-toast',
  templateUrl: './alert-toast.component.html',
})
export class AlertToastComponent {

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
<dss-alert-toast type="info" [open]="openInfo" (closeAlertToast)="openInfo = $event">
  Feedback Alert Information. Text goes right here.
  <dss-alert-toast-actions>
    <button dssButton>Action</button>
  </dss-alert-toast-actions>
</dss-alert-toast>
```

###### `Aviso`

```html
<button dssFilledButton (click)="openWarning = true">Aviso</button>
<br>
<dss-alert-toast type="warning" [open]="openWarning" (closeAlertToast)="openWarning = $event">
  Feedback Alert Warning. Text goes right here.
  <dss-alert-toast-actions>
    <button dssButton>Action</button>
  </dss-alert-toast-actions>
</dss-alert-toast>
```

###### `Perigo`

```html
<button dssFilledButton (click)="openDanger = true">Perigo</button>
<br>
<dss-alert-toast type="danger" [open]="openDanger" (closeAlertToast)="openDanger = $event">
  Feedback Alert Danger. Text goes right here.
  <dss-alert-toast-actions>
    <button dssButton>Action</button>
  </dss-alert-toast-actions>
</dss-alert-toast>
```

###### `Sucesso`

```html
<button dssFilledButton (click)="openSuccess = true">Success</button>
<br>
<dss-alert-toast type="success" [open]="openSuccess" (closeAlertToast)="openSuccess = $event">
  Feedback Alert Success. Text goes right here.
  <dss-alert-toast-actions>
    <button dssButton>Action</button>
  </dss-alert-toast-actions>
</dss-alert-toast>
```

###### `Inputs`
Name | Type    | Default | Obs                                       |
---- | ------- | ------- | ----------------------------------------- |
type | string  | -       | Opções: danger, info, success or warning. |
open | boolean | false   | -                                         |

###### `Output`
Name            | Type                        | Default | Obs |
--------------- | --------------------------- | ------- | --- |
closeAlertToast | EventEmitter&lt;boolean&gt; | -       | -   |

###### `Structural Components`
Name                    | Type | Default  | Obs |
----------------------- | ---- | -------- | --- |
dss-alert-toast-actions | -    | -        | -   |

## Executar testes

```shell
npm run test
```
