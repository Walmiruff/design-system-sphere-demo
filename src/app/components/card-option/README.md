<h1 align="center">Bem vindo ao @dss/components/card-option 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.3.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Card option.

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

import { DssCardOptionModule } from '@dss/components/card-option';

import { CardOptionComponent } from './card-option.component';

@NgModule({
  declarations: [CardOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssCardOptionModule,
  ],
})
export class AppModule { }
```

###### `component`

```ts
import { Component, OnInit } from '@angular/core';

import { DssRadioGroupOptionsInterface } from '@dss/components/radio-group';

@Component({
  selector: 'app-card',
  templateUrl: './card-option.component.html',
})
export class CardOptionComponent implements OnInit {

  public optionsNumber: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'xls' }],
    [{ value: 'doc' }],
    [{ value: 'pdt' }],
  ];

  public cardOption1 = false;

  public cardOption2 = '';

  public cardOption3 = false;

  public optionsCreditCard: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: '3454' }],
    [{ value: '1245' }],
    [{ value: '2727' }],
    [{ value: '9900' }],
  ];

  public cardOption4 = '';

  public cardOption5 = false;

  public optionsIcons: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'atenção' }],
    [{ value: 'fechar' }],
    [{ value: 'ok' }],
    [{ value: 'abrir' }],
  ];

  public cardOption6 = '';

  public cardOption7 = false;

  public features = {
    basicFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: false},
      {label: 'Feature D', check: false},
      {label: 'Feature E', check: false},
      {label: 'Feature F', check: false},
    ],
    masterFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: true},
      {label: 'Feature D', check: true},
      {label: 'Feature E', check: false},
      {label: 'Feature F', check: false},
    ],
    blasterFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: true},
      {label: 'Feature D', check: true},
      {label: 'Feature E', check: true},
      {label: 'Feature F', check: true},
    ],
  };

  public optionsFeature: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'basic' }],
    [{ value: 'master' }],
    [{ value: 'blaster' }],
  ];

  public cardOption8 = '';

  public cardOption9 = false;

  public optionsText: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'Opção 1' }],
    [{ value: 'Opção 2' }],
    [{ value: 'Opção 3' }],
  ];

  public cardOption10 = '';
}

```

###### `template`

###### `Card Option - Número`

```html
<dss-card-option type="number">
  <dss-checkbox name="number" [(ngModel)]="cardOption1"></dss-checkbox>
  <span dssIcon name="document-svg"></span>
  <dss-card-option-label>SVG</dss-card-option-label>
  <dss-card-option-number>999,99</dss-card-option-number>
</dss-card-option>
<dss-card-option-list>
  <dss-card-option type="number">
    <dss-radio-group name="card-option-number-radio" [(ngModel)]="cardOption2" [options]="optionsNumber[0]"></dss-radio-group>
    <span dssIcon name="document-xls"></span>
    <dss-card-option-label>XLS</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
  </dss-card-option>
  <dss-card-option type="number">
    <dss-radio-group name="card-option-number-radio" [(ngModel)]="cardOption2" [options]="optionsNumber[1]"></dss-radio-group>
    <span dssIcon name="document-doc"></span>
    <dss-card-option-label>DOC</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
  </dss-card-option>
  <dss-card-option type="number">
    <dss-radio-group name="card-option-number-radio" [(ngModel)]="cardOption2" [options]="optionsNumber[2]"></dss-radio-group>
    <span dssIcon name="document-ppt"></span>
    <dss-card-option-label>PPT</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
  </dss-card-option>
</dss-card-option-list>
```

###### `Card Option - Texto & Ícone (Credit Card)`

```html
<dss-card-option type="text">
  <dss-checkbox name="text" [(ngModel)]="cardOption3"></dss-checkbox>
  <span dssIcon name="card"></span>
  <dss-card-option-label>Cartão final 1980</dss-card-option-label>
  <dss-card-option-description>Master Card</dss-card-option-description>
</dss-card-option>
<dss-card-option-list>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption4" [options]="optionsCreditCard[0]"></dss-radio-group>
    <span dssIcon name="card"></span>
    <dss-card-option-label>Cartão final {{ optionsCreditCard[0][0].value }}</dss-card-option-label>
    <dss-card-option-description>Master Card</dss-card-option-description>
  </dss-card-option>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption4" [options]="optionsCreditCard[1]"></dss-radio-group>
    <span dssIcon name="card"></span>
    <dss-card-option-label>Cartão final {{ optionsCreditCard[1][0].value }}</dss-card-option-label>
    <dss-card-option-description>Hipercard</dss-card-option-description>
  </dss-card-option>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption4" [options]="optionsCreditCard[2]"></dss-radio-group>
    <span dssIcon name="card"></span>
    <dss-card-option-label>Cartão final {{ optionsCreditCard[2][0].value }}</dss-card-option-label>
    <dss-card-option-description>Dinners</dss-card-option-description>
  </dss-card-option>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption4" [options]="optionsCreditCard[3]"></dss-radio-group>
    <span dssIcon name="card"></span>
    <dss-card-option-label>Cartão final {{ optionsCreditCard[3][0].value }}</dss-card-option-label>
    <dss-card-option-description>Visa</dss-card-option-description>
  </dss-card-option>
</dss-card-option-list>
<dss-card-option type="text">
  <dss-checkbox name="text" [(ngModel)]="cardOption9"></dss-checkbox>
  <dss-card-option-label>Label</dss-card-option-label>
  <dss-card-option-description>Descrição</dss-card-option-description>
</dss-card-option>
<dss-card-option-list>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption10" [options]="optionsText[0]"></dss-radio-group>
    <dss-card-option-label>Opção 1</dss-card-option-label>
    <dss-card-option-description>Descrição</dss-card-option-description>
  </dss-card-option>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption10" [options]="optionsText[1]"></dss-radio-group>
    <dss-card-option-label>Opção 2</dss-card-option-label>
    <dss-card-option-description>Descrição</dss-card-option-description>
  </dss-card-option>
  <dss-card-option type="text">
    <dss-radio-group name="card-option-text-radio" [(ngModel)]="cardOption10" [options]="optionsText[2]"></dss-radio-group>
    <dss-card-option-label>Opção 3</dss-card-option-label>
    <dss-card-option-description>Descrição</dss-card-option-description>
  </dss-card-option>
</dss-card-option-list>
```

###### `Card Option - Ícone`

```html
<dss-card-option type="icon">
  <dss-checkbox name="icon" [(ngModel)]="cardOption5"></dss-checkbox>
  <span dssIcon name="security-block"></span>
  <dss-card-option-label>Lock</dss-card-option-label>
</dss-card-option>
<dss-card-option-list>
  <dss-card-option type="icon">
    <dss-radio-group name="card-option-icon-radio" [(ngModel)]="cardOption6" [options]="optionsIcons[0]"></dss-radio-group>
    <span dssIcon name="security-block"></span>
    <dss-card-option-label>Atenção</dss-card-option-label>
  </dss-card-option>
  <dss-card-option type="icon">
    <dss-radio-group name="card-option-icon-radio" [(ngModel)]="cardOption6" [options]="optionsIcons[1]"></dss-radio-group>
    <span dssIcon name="security-open"></span>
    <dss-card-option-label>Abrir</dss-card-option-label>
  </dss-card-option>
</dss-card-option-list>
```

###### `Card Option - Recurso`

```html
<dss-card-option type="feature">
  <dss-checkbox name="feature" [(ngModel)]="cardOption7"></dss-checkbox>
  <dss-card-option-label>Basic</dss-card-option-label>
  <dss-card-option-number>999,99</dss-card-option-number>
  <dss-card-option-feature *ngFor="let feature of features.basicFeatures" [check]="feature.check">
    {{ feature.label }}
  </dss-card-option-feature>
</dss-card-option>
<dss-card-option-list>
  <dss-card-option type="feature">
    <dss-radio-group name="card-option-feature-radio" [(ngModel)]="cardOption8" [options]="optionsFeature[0]"></dss-radio-group>
    <dss-card-option-label>Basic</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
    <dss-card-option-feature *ngFor="let feature of features.basicFeatures" [check]="feature.check">
      {{ feature.label }}
    </dss-card-option-feature>
  </dss-card-option>
  <dss-card-option type="feature">
    <dss-radio-group name="card-option-feature-radio" [(ngModel)]="cardOption8" [options]="optionsFeature[1]"></dss-radio-group>
    <dss-card-option-label>Master</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
    <dss-card-option-feature *ngFor="let feature of features.masterFeatures" [check]="feature.check">
      {{ feature.label }}
    </dss-card-option-feature>
  </dss-card-option>
  <dss-card-option type="feature">
    <dss-radio-group name="card-option-feature-radio" [(ngModel)]="cardOption8" [options]="optionsFeature[2]"></dss-radio-group>
    <dss-card-option-label>Blaster</dss-card-option-label>
    <dss-card-option-number>999,99</dss-card-option-number>
    <dss-card-option-feature *ngFor="let feature of features.blasterFeatures" [check]="feature.check">
      {{ feature.label }}
    </dss-card-option-feature>
  </dss-card-option>
</dss-card-option-list>
```

###### `Inputs - Card Option`
Name | Type   | Default | Obs                                    |
---- | ------ | ------- | -------------------------------------- |
type | string | -       | opções: number, text, icon ou feature. |

###### `Outputs - Card Option`
Name                       | Type                       | Obs |
-------------------------- | -------------------------- | --- |
changeCardOptionRadioGroup | EventEmitter&lt;string&gt; | -   |

###### `Inputs - Card Option Feature`
Name  | Type    | Default | Obs |
----- | ------- | ------- | --- |
check | boolean | false   | -   |

## Executar testes

```shell
npm run test
```
