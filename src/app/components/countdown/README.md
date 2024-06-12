<h1 align="center">Bem vindo ao @dss/components/countdown 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.9.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Countdown.

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
import { DssCountdownModule } from '@dss/components/countdown';

import { CountdownComponent } from './countdown.component';

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule,
    DssButtonModule,
    DssCountdownModule,
  ],
})
export class CountdownModule { }
```

###### `component`

```ts
import { Component, ViewChild } from '@angular/core';

import { DssCountdownComponent } from '@dss/components/countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
})
export class CountdownComponent {

  @ViewChild('countdown', { static: false }) public countdown: DssCountdownComponent;

  public minute = 1;

  public second = 30;

  public restart(): void {
    this.countdown.initCountdown();
  }

}
```

###### `template`

###### `Default`

```html
<dss-countdown [hour]="3" [minute]="1" [second]="3"></dss-countdown>
```

###### `Minutos e Segundos`

```html
<dss-countdown [minute]="13" [second]="19"></dss-countdown>
```

###### `Segundos`

```html
<dss-countdown [second]="23"></dss-countdown>
```

###### `Com Texto`

```html
<dss-countdown [hour]="1" [minute]="1" [second]="3">
  <dss-countdown-description>
    Estas transferências podem ser realizadas até as 16:00 horas de hoje para serem
    efetivadas no mesmo dia, fique atento ao tempo restante para conclusão da tarefa.
  </dss-countdown-description>
</dss-countdown>
```

###### `Com Botão`

```html
<dss-countdown #countdown [minute]="minute" [second]="second">
  <dss-countdown-text>O código deverá chegar em até:</dss-countdown-text>
  <dss-countdown-action>
    <dss-countdown-text>Não recebeu seu código?</dss-countdown-text>
    <button dssButton (click)="restart()">Reenviar SMS</button>
  </dss-countdown-action>
</dss-countdown>
```

###### `Inputs`
Name   | Type   | Default | Obs |
------ | ------ | ------- | --- |
hour   | number | -       | -   |
minute | number | -       | -   |
second | number | 0       | -   |

###### `Structural Components`
Name                      | Type | Default  | Obs |
------------------------- | ---- | -------- | --- |
dss-countdown-description | -    | -        | -   |
dss-countdown-text        | -    | -        | -   |
dss-countdown-action      | -    | -        | -   |

###### `Outputs`
Name      | Type                       | Obs |
--------- | -------------------------- | --- |
countdown | EventEmitter&lt;number&gt; | -   |
finished  | EventEmitter&lt;void&gt;   | -   |

###### `Methods`
Name          | Type              | Obs |
------------- | ----------------- | --- |
initCountdown | restart countdown | -   |

## Executar testes

```shell
npm run test
```
