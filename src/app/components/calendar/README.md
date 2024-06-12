<h1 align="center">Bem vindo ao @dss/components/calendar 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Calendar.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssCalendarModule } from '@dss/components/calendar';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    DssCalendarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {}
```

###### `template`

```html
<dss-calendar></dss-calendar>
```

###### `Inputs`

| Name             | Type                  | Default    | Obs                                       |
| ---------------- | --------------------- | ---------- | ----------------------------------------- |
| isElevation      | boolean               | false      | Aplica sombra no container do calendário. |
| eventDates       | Array<Date>, Date     | -          | -                                         |
| disabledDays     | Array<Date>           | -          | -                                         |
| disabledDaysWeek | Array<number>, number | -          | -                                         |
| minDate          | Date                  | -          | -                                         |
| maxDate          | Date                  | -          | -                                         |
| startDate        | Date                  | new Date() | -                                         |
| startDateRange   | Date                  | -          | -                                         |
| endDateRange     | Date                  | -          | -                                         |

###### `Outputs`

| Name        | Type                                                | Obs |
| ----------- | --------------------------------------------------- | --- |
| dayChange   | EventEmitter<Date>                                  | -   |
| monthChange | EventEmitter<{ direction?: string, value: number }> | -   |
| yearChange  | EventEmitter<{ direction?: string, value: number }> | -   |

## Executar testes

```shell
npm run test
```
