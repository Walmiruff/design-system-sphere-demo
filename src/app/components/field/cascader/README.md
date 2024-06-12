<h1 align="center">Bem vindo ao @dss/components/cascader 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Cascader.

## Instalação

```sh
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssCascaderModule } from '@dss/components/cascader';
import { DssFormFieldModule } from '@dss/components/form-field';

import { CascaderComponent } from './cascader.component';

@NgModule({
  declarations: [CascaderComponent],
  imports: [
    CommonModule,
    DssCascaderModule,
    DssFormFieldModule,
  ],
  exports: [CascaderComponent],
})
export class CascaderModule { }
```

###### `component`

```ts
import { Component, OnInit } from '@angular/core';

import { DssCascaderOptionInterface } from '@dss/components/cascader';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
})
export class CascaderComponent implements OnInit {

  public cascader1 = '';

  public cascader2 = '';

  public options: Array<DssCascaderOptionInterface> = [
    {
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          value: 'sp',
          viewValue: 'São Paulo',
          children: [
            {
              value: 'sao paulo',
              viewValue: 'São Paulo',
            },
            {
              value: 'ribeirao preto',
              viewValue: 'Ribeirão Preto',
            },
            {
              value: 'jundia',
              viewValue: 'Jundiaí',
            },
            {
              value: 'bauru',
              viewValue: 'Bauru',
            },
            {
              value: 'araraquara',
              viewValue: 'Araraquara',
            },
          ],
        },
        {
          value: 'rj',
          viewValue: 'Rio de Janeiro',
          children: [
            {
              value: 'niteroi',
              viewValue: 'Niterói',
            },
            {
              value: 'petropolis',
              viewValue: 'Petrópolis',
            },
            {
              value: 'sao goncalo',
              viewValue: 'São Gonçalo',
            },
          ],
        },
        {
          value: 'mg',
          viewValue: 'Minas Gerais',
          children: [
            {
              value: 'belo horizonte',
              viewValue: 'Belo Horizonte',
            },
            {
              value: 'uberlandia',
              viewValue: 'Uberlândia',
            },
            {
              value: 'ouro preto',
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          value: 'to',
          viewValue: 'Tocantins',
          children: [
            {
              value: 'palmas',
              viewValue: 'Palmas',
            },
            {
              value: 'araguatins',
              viewValue: 'Araguatins',
            },
            {
              value: 'porto nacional',
              viewValue: 'Porto Nacional',
            },
          ],
        },
      ],
    },
    {
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          viewValue: 'Buenos Aires',
          children: [
            {
              value: 'buenos aires',
              viewValue: 'Buenos Aires',
            },
            {
              value: 'la plata',
              viewValue: 'La Plata',
            },
          ],
        },
        {
          value: 'rosario',
          viewValue: 'Rosário',
          children: [
            {
              value: 'santa fe',
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          value: 'santiago',
          viewValue: 'Santiago',
          children: [
            {
              value: 'la serena',
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public options2: Array<DssCascaderOptionInterface> = [
    {
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          value: 'sp',
          viewValue: 'São Paulo',
        },
        {
          value: 'rj',
          viewValue: 'Rio de Janeiro',
        },
        {
          value: 'mg',
          viewValue: 'Minas Gerais',
        },
        {
          value: 'to',
          viewValue: 'Tocantins',
        },
      ],
    },
    {
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          viewValue: 'Buenos Aires',
        },
        {
          value: 'rosario',
          viewValue: 'Rosário',
        },
      ],
    },
    {
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          value: 'santiago',
          viewValue: 'Santiago',
        },
      ],
    },
  ];
}
```

###### `template`

###### `Padrão`

```html
<dss-form-field>
  <dss-cascader [(ngModel)]="cascader1" [options]="options">
    <ng-container *dssCascaderLevel="let option">
      <dss-option [value]="option.value">{{ option.viewValue }}</dss-option>
    </ng-container>
  </dss-cascader>
  <label dssLabel>Selecione uma cidade</label>
  <span dssHint>*Campo obrigatório</span>
</dss-form-field>
```

###### `Com 2 níveis`

```html
<dss-form-field>
  <dss-cascader [(ngModel)]="cascader2" [options]="options2">
    <ng-container *dssCascaderLevel="let option">
      <dss-option [value]="option.value">{{ option.viewValue }}</dss-option>
    </ng-container>
  </dss-cascader>
  <label dssLabel>Selecione uma cidade</label>
</dss-form-field>
```
> É possível ter quantos níveis forem necessários, mas vale lembrar que o recomendado é no máximo 3.

###### `Iniciando com algum valor`

```html
<dss-form-field>
  <dss-cascader [(ngModel)]="cascader3" [options]="options">
    <ng-container *dssCascaderLevel="let option">
      <dss-option [value]="option.value">{{ option.viewValue }}</dss-option>
    </ng-container>
  </dss-cascader>
  <label dssLabel>Selecione uma cidade</label>
</dss-form-field>
```
> Para iniciar com algum valor basta passar um array com os valores da propriedade `value` de options, por exemplo, `cascader3 = ['brasil', 'sp', 'sao paulo']`.
> É necessário passar um valor para cada level.

###### `Inputs`
| Name          | Type    | Default | Obs |
|---------------|---------|---------|-----|
| id            | string  | uuid    | -   |
| disabled      | boolean | false   | -   |
| tabIndex      | string  | 0       | -   |
| openDirection | string  | down    | -   |

###### `Output`
| Name            | Type                                    | Obs |
|-----------------|-----------------------------------------|-----|
| selectionChange | EventEmitter&lt;Array&lt;string&gt;&gt; | -   |

###### `Directives`
| Name             | Type | Default | Obs                                                  |
|------------------|------|---------|------------------------------------------------------|
| dssCascaderLevel | -    | -       | Diretiva estrutural para ser usada com ng-container. |

###### `Interfaces`
| Name                       | Type                                                                                    | Default | Obs |
|----------------------------|-----------------------------------------------------------------------------------------|---------|-----|
| DssCascaderOptionInterface | { value: string; viewValue: string children?: Array&lt;DssCascaderOptionInterface&gt; } | -       | -   |

###### `Structural Components`
| Name       | Type | Default | Obs                           |
|------------|------|---------|-------------------------------|
| dss-option | -    | -       | [Option](../option/README.md) |

## Executar testes

```sh
npm run test
```
