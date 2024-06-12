<h1 align="center">Bem vindo ao @dss/components/notify 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.5.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Notify.

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
import { DssNotifyModule } from '@dss/components/notify';

import { NotifyComponent } from './notify.component';

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,
    DssNotifyModule,
    DssButtonModule,
    DssIconModule,
  ],
})
export class NotifyModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
})
export class NotifyComponent {
  public open = false;
}
```

###### `template`

```html
<dss-notify [open]="open" (closeNotify)="open = $event">
  <dss-notify-header>
    <span dssIcon name="block-in-a-circle"></span>
    <dss-notify-title>Título da Notificação</dss-notify-title>
  </dss-notify-header>
  <dss-notify-body>
    <p>Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger as an attachment excellence.</p>
  </dss-notify-body>
  <dss-notify-footer>
    <button dssButton (click)="open = false">Action</button>
  </dss-notify-footer>
</dss-notify>
```

###### `Inputs`

| Name | Type    | Default | Obs |
| ---- | ------- | ------- | --- |
| open | boolean | false   | -   |

###### `Outputs`

| Name        | Type                        | Obs |
| ----------- | --------------------------- | --- |
| closeNotify | EventEmitter&lt;boolean&gt; | -   |

###### `Structural Components`

| Name              | Type | Default | Obs |
| ----------------- | ---- | ------- | --- |
| dss-notify-body   | -    | -       | -   |
| dss-notify-footer | -    | -       | -   |
| dss-notify-header | -    | -       | -   |
| dss-notify-title  | -    | -       | -   |

## Executar testes

```shell
npm run test
```
