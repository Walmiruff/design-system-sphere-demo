<h1 align="center">Bem vindo ao @dss/components/option-button 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Option Button.

## Instalação

```sh
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DssButtonModule } from '@dss/components/button';
import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDividerModule } from '@dss/components/divider';
import { DssOptionButtonModule } from '@dss/components/option-button';
import { DssRadioGroupModule } from '@dss/components/radio-group';

import { OptionButtonComponent } from './option-button.component';

@NgModule({
  declarations: [OptionButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssButtonModule,
    DssCheckboxModule,
    DssDividerModule,
    DssOptionButtonModule,
    DssRadioGroupModule,
  ],
  exports: [OptionButtonComponent],
})
export class OptionButtonModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

import { DssOptionButtonOptionsInterface } from '@dss/components/option-button';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
})
export class OptionButtonComponent {

  public options: Array<DssOptionButtonOptionsInterface> = [
    { icon: 'add', option: 'Adicionar' },
    { icon: 'edit', option: 'Editar' },
    { icon: 'trash-bin', option: 'Excluir' },
  ];

  public input1 = '';

  public input3 = '';

  public optionsSimple: Array<DssOptionButtonOptionsInterface> = [
    { option: 'Adicionar' },
    { option: 'Editar' },
    { option: 'Excluir' },
  ];

  public input2 = '';

  public optionsRadio: Array<DssOptionButtonOptionsInterface> = [
    { option: 'Pix recebido' },
    { option: 'Pix devolvido' },
  ];

  public radioGroup: string;

  public optionButtonWithRadioOpen = false;

  public optionsCheckbox: Array<DssOptionButtonOptionsInterface> = [
    { option: '000001', checked: false },
    { option: '000002', checked: false },
    { option: '000003', checked: false },
    { option: '000004', checked: false },
    { option: '000005', checked: false },
    { option: '000006', checked: false },
  ];

  public optionButtonWithCheckboxOpen = false;

  public disabled(): boolean {
    return this.optionsCheckbox.findIndex((option: DssOptionButtonOptionsInterface) => option.checked) === -1;
  }

}
```

###### `template`

###### `Simples`

```html
<dss-option-button label="Option Button" [options]="options" (optionButtonChange)="input1 = $event"></dss-option-button>
```

###### `Com Radio Group`

```html
<dss-option-button [toggleSelection]="true" [open]="optionButtonWithRadioOpen" (optionButtonOpen)="optionButtonWithRadioOpen = $event">
  <dss-option-button-label>Lançamento</dss-option-button-label>
  <dss-option-button-label-selection>{{ optionsRadio[radioGroup]?.option }}</dss-option-button-label-selection>
  <dss-option-button-selection style="width: 250px">
    <dss-option-button-selection-title>Tipo de lançamento</dss-option-button-selection-title>
    <dss-radio-group [(ngModel)]="radioGroup">
      <dss-radio-button *ngFor="let radio of optionsRadio; index as i" [value]="i">{{ radio.option }}</dss-radio-button>
    </dss-radio-group>
  </dss-option-button-selection>
  <dss-option-button-action>
    <button dssOutlineButton [disabled]="!optionsRadio[radioGroup]?.option" (click)="optionButtonWithRadioOpen = false">Aplicar</button>
  </dss-option-button-action>
</dss-option-button>
```

###### `Com Checkbox`

```html
<dss-option-button [toggleSelection]="true" [open]="optionButtonWithCheckboxOpen" (optionButtonOpen)="optionButtonWithCheckboxOpen = $event">
  <dss-option-button-label>Contrato</dss-option-button-label>
  <dss-option-button-label-selection>Todos</dss-option-button-label-selection>
  <dss-option-button-selection style="width: 250px">
    <ng-container *ngFor="let checkbox of optionsCheckbox; index as i">
      <dss-checkbox [checked]="checkbox.checked" (change)="checkbox.checked = $event.checked">{{ checkbox.option }}</dss-checkbox>
    </ng-container>
  </dss-option-button-selection>
  <hr dssDivider>
  <dss-option-button-action>
    <button dssFilledButton [disabled]="disabled()" (click)="optionButtonWithCheckboxOpen = false">Aplicar</button>
  </dss-option-button-action>
</dss-option-button>
```

###### `Inputs`
Name            | Type                                         | Default | Obs                                          |
--------------- | -------------------------------------------- | ------- | -------------------------------------------- |
label           | string                                       | -       | -                                            |
options         | Array&lt;DssOptionButtonOptionsInterface&gt; | []      | DssOptionButtonOptionsInterface (#interface) |
option          | string                                       | ''      | -                                            |
toggleSelection | boolean                                      | false   | -                                            |
disabled        | boolean                                      | false   | -                                            |
openDirection   | string                                       | down    | opções: up ou down                           |
open            | boolean                                      | false   | -                                            |

###### `Outputs`
Name               | Type                        | Obs                        |
------------------ | --------------------------- | -------------------------- |
optionButtonChange | EventEmitter&lt;string&gt;  | O valor que está em option |
optionButtonOpen   | EventEmitter&lt;boolean&gt; | O valor de open            |

###### `Structural Components`
Name                              | Type | Default  | Obs                           |
--------------------------------- | ---- | -------- | ----------------------------- |
dss-option-button-label           | -    | -        | -                             |
dss-option-button-label-selection | -    | -        | -                             |
dss-option-button-selection       | -    | -        | -                             |
dss-option-button-selection-title | -    | -        | -                             |
dss-option-button-action          | -    | -        | -                             |

<a id="interface"></a>
###### `Interfaces`
Name                            | Type                                                 | Default  | Obs |
------------------------------- | ---------------------------------------------------- | -------- | --- |
DssOptionButtonOptionsInterface | { option: string, icon?: string, checked?: boolean } | -        | -   |

## Executar testes

```sh
npm run test
```
