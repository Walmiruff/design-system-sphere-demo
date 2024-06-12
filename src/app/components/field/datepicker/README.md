<h1 align="center">Bem vindo ao @dss/components/datepicker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Datepicker.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssDatepickerModule } from '@dss/components/datepicker';
import { DssTagModule } from '@dss/components/tag';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    DssDatepickerModule,
    DssTagModule, // Necessário apenas se o datepicker-range for usado com dss-datepicker-range-filter
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

###### `component`

```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
  public input = '';

  public inputWithFilter = '';

  @ViewChild('datepickerRangeWithFilter', { static: false }) public datepickerRangeWithFilter: DssDatepickerRangeComponent;

  public rangeInDays: number;

  public setRange(rangeInDays: number): void {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(0, 0, 0, 0);

    if (rangeInDays > 0) {
      end.setDate(start.getDate() + rangeInDays - 1);
    } else {
      start.setDate(start.getDate() + rangeInDays + 1);
    }

    this.datepickerRangeWithFilter.setDate(start, 'start');
    this.datepickerRangeWithFilter.setDate(end, 'end');
    this.rangeInDays = rangeInDays;
  }

  toggleDatepicker(status: string): void {
    alert(`datepicker-range ${status}!`);
  }
}
```

###### `template - Datepicker`

```html
<dss-datepicker (datepickerChange)="input = $event"></dss-datepicker>
```

###### `template - Datepicker Range`

```html
<dss-datepicker-range (datepickerRangeChange)="input = $event"></dss-datepicker-range>
```

###### `template - Datepicker Range com Filtro`

```html
<dss-datepicker-range #datepickerRangeWithFilter (datepickerRangeChange)="inputWithFilter = $event; rangeInDays = undefined">
  <dss-datepicker-range-filter [title]="'Período'">
    <dss-tag-list>
      <dss-tag [isActive]="rangeInDays === -7" [isFilter]="true" (click)="setRange(-7)">Últimos 7 dias</dss-tag>
      <dss-tag [isActive]="rangeInDays === -15" [isFilter]="true" (click)="setRange(-15)">Últimos 15 dias</dss-tag>
      <dss-tag [isActive]="rangeInDays === -30" [isFilter]="true" (click)="setRange(-30)">Últimos 30 dias</dss-tag>

      <dss-tag [isActive]="rangeInDays === 7" [isFilter]="true" (click)="setRange(7)" class="dss-separator">Próximos 7 dias</dss-tag>
      <dss-tag [isActive]="rangeInDays === 15" [isFilter]="true" (click)="setRange(15)">Próximos 15 dias</dss-tag>
      <dss-tag [isActive]="rangeInDays === 30" [isFilter]="true" (click)="setRange(30)">Próximos 30 dias</dss-tag>
    </dss-tag-list>
  </dss-datepicker-range-filter>
</dss-datepicker-range>
```

###### `template - Datepicker Range com limite de range em dias`

```html
<dss-datepicker-range (datepickerRangeChange)="input = $event" [rangeLimit]="10" errorMessage="Data inválida"></dss-datepicker-range>
```

###### `template - Datepicker com outputs openDatepicker e closeDatepicker`

```html
<dss-datepicker (openDatepicker)="toggleDatepicker('aberto')" (closeDatepicker)="toggleDatepicker('fechado')"></dss-datepicker>
```

###### `template - Datepicker Range com outputs openDatepicker e closeDatepicker`

```html
<dss-datepicker-range (openDatepicker)="toggleDatepicker('aberto')" (closeDatepicker)="toggleDatepicker('fechado')"></dss-datepicker-range>
```

###### `Inputs`

| Name             | Type                        | Default                  | Obs                                                 |
| ---------------- | --------------------------- | ------------------------ | --------------------------------------------------- |
| value            | string                      | -                        | no datepicker                                       |
| startValue       | string                      | -                        | no datepicker-range                                 |
| endValue         | string                      | -                        | no datepicker-range                                 |
| icon             | string                      | doc-022                  | -                                                   |
| label            | string                      | Selecione uma data       | no datepicker                                       |
| label            | string                      | Período                  | no datepicker-range                                 |
| isError          | boolean                     | false                    | -                                                   |
| disabled         | boolean                     | -                        | -                                                   |
| hint             | string                      | -                        | -                                                   |
| errorMessage     | string                      | Data no formato inválido | -                                                   |
| id               | string                      | -                        | -                                                   |
| openDirection    | string                      | down                     | opções: up ou down                                  |
| format           | string                      | dd/mm/yyyy               | opções: dd/mm/yyyy, mm/dd/yyyy, yyyy/mm/dd, mm/yyyy |
| eventDates       | Array&lt;Date&gt;, Date     | -                        | -                                                   |
| disabledDays     | Array&lt;Date&gt;           | -                        | no datepicker                                       |
| disabledDaysWeek | Array&lt;number&gt;, number | -                        | -                                                   |
| minDate          | Date                        | -                        | -                                                   |
| maxDate          | Date                        | -                        | -                                                   |
| mobileView       | boolean                     | false                    | -                                                   |
| rangeLimit       | number                      | -                        | no datepicker-range - Range em dias                 |
| isOnlyMonthYear  | booleans                    | false                    | -                                                   |

###### `Outputs`

| Name                  | Type                                               | Obs                 |
| --------------------- | -------------------------------------------------- | ------------------- |
| datepickerChange      | EventEmitter&lt;string&gt;                         | no datepicker       |
| datepickerRangeChange | EventEmitter&lt;{ start: string, end: string }&gt; | no datepicker-range |
| openDatepicker        | EventEmitter&lt;&gt;                               |                     |
| closeDatepicker       | EventEmitter&lt;&gt;                               |                     |

## Executar testes

```shell
npm run test
```
