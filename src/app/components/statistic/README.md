<h1 align="center">Bem vindo ao @dss/components/statistic 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.5.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Statistic.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssIconModule } from '@dss/components/icon';
import { DssStatisticModule } from '@dss/components/statistic';
import { DssStatusArrowModule } from '@dss/components/status-arrow';

import { StatisticComponent } from './statistic.component';

@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    DssStatisticModule,
    DssIconModule,
    DssStatusArrowModule,
  ],
})
export class StatisticModule { }
```

###### `component`

```ts
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class StatisticComponent {

  public statisticDefault = [
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
  ];

  public statisticList = [
    { label: 'Regular data', value: 0.9 },
    { label: 'Regular data', value: -0.15 },
    { label: 'Regular data', value: 0.23 },
    { label: 'Regular data', value: 0.45 },
    { label: 'Regular data', value: 0.42 },
  ];

  public statisticSpaced = [
    { label: 'Regular data', value: -0.53 },
    { label: 'Regular data', value: 0.15 },
    { label: 'Regular data', value: -0.23 },
    { label: 'Regular data', value: -0.45 },
    { label: 'Regular data', value: 0.24 },
  ];

}
```

###### `template`

###### `Padrão`

```html
<dss-statistic>
  <dss-statistic-header>
    <dss-statistic-title>Statistic Title</dss-statistic-title>
    <dss-statistic-value>99.000,00</dss-statistic-value>
  </dss-statistic-header>
  <span dssIcon name="factory"></span>
  <dss-statistic-item *ngFor="let item of statisticDefault">
    <dss-statistic-item-label>{{ item.label }}</dss-statistic-item-label>
    <dss-statistic-item-value>{{ item.value | currency:'BRL' }}</dss-statistic-item-value>
  </dss-statistic-item>
</dss-statistic>
```

###### `Lista`

```html
<dss-statistic>
  <dss-statistic-item *ngFor="let item of statisticList" status="{{ item.value < 0 ? 'negative' : 'positive' }}">
    <dss-statistic-item-label>{{ item.label }}</dss-statistic-item-label>
    <dss-statistic-item-value>
      {{ item.value | percent: '2.2' }} <span dssStatusArrow status="{{ item.value < 0 ? 'negative' : 'positive' }}" direction="{{ item.value < 0 ? 'bottom' : 'top' }}"></span>
    </dss-statistic-item-value>
  </dss-statistic-item>
</dss-statistic>
```

###### `Espaçado`

```html
<dss-statistic type="spaced">
  <dss-statistic-header>
    <dss-statistic-title>Statistic Title</dss-statistic-title>
    <dss-statistic-value>99.000,00</dss-statistic-value>
  </dss-statistic-header>
  <dss-statistic-item *ngFor="let item of statisticSpaced" status="{{ item.value < 0 ? 'negative' : 'positive' }}">
    <dss-statistic-item-label>{{ item.label }}</dss-statistic-item-label>
    <dss-statistic-item-value>
      {{ item.value | percent: '2.2' }} <span dssStatusArrow status="{{ item.value < 0 ? 'negative' : 'positive' }}" direction="{{ item.value < 0 ? 'bottom' : 'top' }}"></span>
    </dss-statistic-item-value>
  </dss-statistic-item>
</dss-statistic>
```

###### `Inline`

```html
<dss-statistic type="inline">
  <dss-statistic-header>
    <dss-statistic-title>Statistic Title 1</dss-statistic-title>
    <dss-statistic-value>99.000,00</dss-statistic-value>
  </dss-statistic-header>
  <dss-statistic-header>
    <dss-statistic-title>Statistic Title 2</dss-statistic-title>
    <dss-statistic-value>99.000,00</dss-statistic-value>
  </dss-statistic-header>
  <dss-statistic-header>
    <dss-statistic-title>Statistic Title 3</dss-statistic-title>
    <dss-statistic-value>99.000,00</dss-statistic-value>
  </dss-statistic-header>
</dss-statistic>
```

###### `Inputs`
Name | Type   | Default | Obs                      |
---- | ------ | ------- | ------------------------ |
type | string | -       | opções: spaced ou inline |

###### `Inputs - Statistic Item`
Name   | Type   | Default | Obs                          |
------ | ------ | ------- | ---------------------------- |
status | string | -       | opções: negative ou positive |

###### `Structural Components`
Name                     | Type | Default  | Obs |
------------------------ | ---- | -------- | --- |
dss-statistic-header     | -    | -        | -   |
dss-statistic-title      | -    | -        | -   |
dss-statistic-value      | -    | -        | -   |
dss-statistic-item       | -    | -        | -   |
dss-statistic-item-label | -    | -        | -   |
dss-statistic-item-value | -    | -        | -   |

## Executar testes

```shell
npm run test
```
