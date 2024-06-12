<h1 align="center">Bem vindo ao @dss/components/data-tables 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Data Table.

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

import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDataTableModule } from '@dss/components/data-table';
import { DssRadioGroupModule } from '@dss/components/radio-group';
import { DssTypographyModule } from '@dss/components/typography';

import { DataTableActionsComponent } from './data-table-actions.component';
import { DataTableDefaultComponent } from './data-table-default.component';
import { DataTableFixedComponent } from './data-table-fixed.component';
import { DataTableWithCheckboxServiceComponent } from './data-table-with-checkbox-service.component';
import { DataTableWithCheckboxDirectiveComponent } from './data-table-with-checkbox-directive.component';
import { DataTableWithRadioServiceComponent } from './data-table-with-radio-service.component';
import { DataTableWithRadioDirectiveComponent } from './data-table-with-radio-directive.component';
import { DataTableColumnFilterComponent } from './data-table-column-filter.component';

@NgModule({
  declarations: [
    DataTableActionsComponent,
    DataTableDefaultComponent,
    DataTableFixedComponent,
    DataTableWithCheckboxServiceComponent,
    DataTableWithCheckboxDirectiveComponent,
    DataTableWithRadioServiceComponent,
    DataTableWithRadioDirectiveComponent,
    DataTableColumnFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DssDataTableModule,
    DssCheckboxModule,
    DssRadioGroupModule,
    DssTypographyModule,
  ],
})
export class AppModule {}
```

##### `Padrão`

###### `component`

```ts
import { Component } from '@angular/core';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-default',
  templateUrl: './data-table-default.component.html',
})
export class DataTableDefaultComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell dssSort column="name" order="desc">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com Botões de Ação na Listagem`

###### `component`

```ts
import { Component } from '@angular/core';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-actions',
  templateUrl: './data-table-actions.component.html',
})
export class DataTableActionsComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <td *dssCell="let element; let indexRow = indexRow">
        <ul>
          <li>
            <a href="#"><span dssIcon name="add-1px"></span></a>
          </li>
          <li>
            <a href="#"><span dssIcon name="edit"></span></a>
          </li>
        </ul>
      </td>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
  <dss-data-table-not-found>
    <div dssTypography type="body" style="align-items: center; display: flex; flex-direction: column; margin: 32px;">
      <span dssIcon name="search" size="extra-large"></span>
      <p dssTypography type="figure3">Nenhum resultado encontrado</p>
      <p dssTypography type="caption">Tente refazer a busca com outras palavras</p>
    </div>
  </dss-data-table-not-found>
</dss-data-table>
```

##### `Colunas Fixas`

###### `component`

```ts
import { Component } from '@angular/core';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-fixed',
  templateUrl: './data-table-fixed.component.html',
})
export class DataTableFixedComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource" fixedColumns="2">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th style="width: 200px" *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com Checkbox - Service`

###### `component`

```ts
import { Component } from '@angular/core';
import { DssDataTableService, DssDataTableWithCheckbox } from '@dss/components/data-table';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-with-checkbox-service',
  templateUrl: './data-table-with-checkbox-service.component.html',
})
export class DataTableWithCheckboxServiceComponent extends DssDataTableWithCheckbox {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];

  constructor(protected dataTableService: DssDataTableService) {
    super(dataTableService);
  }
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource" [fixedColumns]="2">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell>
        <dss-checkbox [indeterminate]="isIndeterminate()" [checked]="isSelectedAll()" (change)="selectedAll()"></dss-checkbox>
      </th>
      <td *dssCell="let row">
        <dss-checkbox [checked]="isSelectedRow(row)" (change)="selectedRow(row)"></dss-checkbox>
      </td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com Checkbox - Directive`

###### `component`

```ts
import { Component } from '@angular/core';
import { DssDataTableService, DssDataTableWithCheckbox } from '@dss/components/data-table';

export interface DataSourceInterface {
  selected: boolean;
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-with-checkbox-directive',
  templateUrl: './data-table-with-checkbox-directive.component.html',
})
export class DataTableWithCheckboxDirectiveComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { selected: false, name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { selected: false, name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource" [fixedColumns]="2">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell>
        <dss-checkbox dssDataTableCheckboxAll></dss-checkbox>
      </th>
      <td *dssCell="let row">
        <dss-checkbox
          dssDataTableCheckboxRow
          [dataTableRow]="row"
          [checked]="row.selected"
          (change)="row.selected = $event.checked"
        ></dss-checkbox>
      </td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com Radio Group - Service`

###### `component`

```ts
import { Component, OnInit } from '@angular/core';
import { DssDataTableService, DssDataTableWithRadioGroup } from '@dss/components/data-table';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-with-radio-service',
  templateUrl: './data-table-with-radio-service.component.html',
})
export class DataTableWithRadioComponent extends DssDataTableWithRadioGroup implements OnInit {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];

  constructor(protected dataTableService: DssDataTableService) {
    super(dataTableService);
  }

  public ngOnInit(): void {
    this.addOptionsRadioGroup();
  }
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell></th>
      <td *dssCell="let row">
        <dss-radio-group
          name="radio-group"
          [options]="optionRadioGroup(row)"
          [value]="isSelectedRow(row)"
          (change)="selectedRow(row)"
        ></dss-radio-group>
      </td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com Radio Group - Directive`

###### `component`

```ts
import { Component, OnInit } from '@angular/core';
import { DssDataTableService, DssDataTableWithRadioGroup } from '@dss/components/data-table';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-with-radio-directive',
  templateUrl: './data-table-with-radio-directive.component.html',
})
export class DataTableWithRadioComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell></th>
      <td *dssCell="let row">
        <dss-radio-group dssDataTableRadioGroup [dataTableRow]="row">
          <dss-radio-button [value]="row.cpf"></dss-radio-button>
        </dss-radio-group>
      </td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com uma Função de Ordenação`

###### `component`

```ts
import { Component } from '@angular/core';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-default',
  templateUrl: './data-table-default.component.html',
})
export class DataTableDefaultComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 35, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 13, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 3, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 37, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 10, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];

  public compareAges(a: Object, b: Object): number {
    const currentColumnValueA = a['age'] || '';
    const currentColumnValueB = b['age'] || '';
    return currentColumnValueA - currentColumnValueB;
  }
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell dssSort column="name" order="desc">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="age" [compareFn]="compareAges">Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

##### `Com sorting controlado externamente`

Quando o sorting é controlado externamente, usar o input `hasCustomSorting` desabilita a ordenação nativo do `data-table` para não haver conflitos.

###### `component`

```ts
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';

import { ResponseInterface, BackendService } from './backend.service';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  selector: 'app-data-table-backend-pagination',
  templateUrl: './data-table-backend-pagination.component.html',
})
export class DataTableBackendPaginationComponent implements OnInit {
  public input = '';

  public dataSource$: Observable<Array<DataSourceInterface>>;

  public page = 1;

  public limit = 10;

  public total: number;

  public isLoading = false;

  constructor(private readonly _backendService: BackendService) {}

  public ngOnInit(): void {
    this.setDataSource(this.page, this.limit);
  }

  public updateLimit(limit: number): void {
    this.page = 1;
    this.limit = limit;
    this.setDataSource(this.page, this.limit);
  }

  public updatePage(page: number): void {
    this.page = page;
    this.setDataSource(this.page, this.limit);
  }

  private setDataSource(page: number, limit: number): void {
    this.isLoading = true;

    this.dataSource$ = this._backendService.getUsers(page, limit).pipe(
      finalize(() => (this.isLoading = false)),
      switchMap((response: ResponseInterface) => {
        this.total = Math.ceil(response.total / this.limit);
        return of(response.users);
      }),
    );
  }
}
```

###### `template`

```html
<div class="dss-position-relative">
  <dss-data-table [dataSource]="dataSource$" [hasCustomSorting]="true">
    <header dssDataTableHeader>
      <h3 dssDataTableTitle>Lista de usuários</h3>
      <dss-form-field>
        <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
        <span dssIcon name="search" rtlt="left"></span>
      </dss-form-field>
    </header>
    <table>
      <ng-container>
        <th *dssHeaderCell>Nome</th>
        <td *dssCell="let element" dssSort column="column>{{ element.name }}</td>
      </ng-container>
      <ng-container>
        <th *dssHeaderCell>CPF</th>
        <td *dssCell="let element">{{ element.cpf }}</td>
      </ng-container>
      <ng-container>
        <th *dssHeaderCell>Registro</th>
        <td *dssCell="let element">{{ element.code }}</td>
      </ng-container>
      <ng-container>
        <th *dssHeaderCell>Idade</th>
        <td *dssCell="let element">{{ element.age }}</td>
      </ng-container>
      <ng-container>
        <th *dssHeaderCell>Nacionalidade</th>
        <td *dssCell="let element">{{ element.nationality }}</td>
      </ng-container>
      <ng-container>
        <th *dssHeaderCell></th>
        <ng-container *dssCellActions="let element; let indexRow = indexRow">
          <ul dssFlyoutMenu>
            <li dssFlyoutMenuItem>
              <a href="#" dssFlyoutMenuLink>
                <span dssIcon name="add-1px"></span>
                <span dssFlyoutMenuLabel>Adicionar</span>
              </a>
            </li>
            <li dssFlyoutMenuItem>
              <a href="#" dssFlyoutMenuLink>
                <span dssIcon name="edit"></span>
                <span dssFlyoutMenuLabel>Editar</span>
              </a>
            </li>
            <li dssFlyoutMenuItem>
              <a href="#" dssFlyoutMenuLink>
                <span dssIcon name="trash-bin"></span>
                <span dssFlyoutMenuLabel>Excluir</span>
              </a>
            </li>
          </ul>
        </ng-container>
      </ng-container>
    </table>
  </dss-data-table>
  <div
    *ngIf="isLoading"
    class="dss-position-absolute dss-top-0 dss-left-0"
    style="background-color: rgba(255, 255, 255, 0.96); height: 100%; width: 100%"
  >
    <dss-content-loader
      class="dss-position-absolute dss-top-50 dss-left-50 dss-translate-middle"
      [show]="isLoading"
      [path]="'assets/content-loader/default.json'"
    ></dss-content-loader>
  </div>
</div>
<dss-pagination
  [optionDefault]="limit.toString()"
  [pageCount]="total"
  (itemsPageChange)="updateLimit($event)"
  (selectedPageChange)="updatePage($event)"
></dss-pagination>
```

##### `Com columnFilter para o filtro`

Quando adiciona o input `columnFilter`, a pesquisa da tabela ira utilizar os atributos informados nesse input para a realização da pesquisa.

###### `component`

```ts
import { Component } from '@angular/core';
import { DssSortChangeInterface } from '@dss/components/data-table';

export interface DataSourceInterface {
  id: string;
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}
@Component({
  selector: 'app-data-table-column-filter',
  templateUrl: './data-table-column-filter.component.html',
})
export class DataTableColumnFilterComponent {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [
    { name: 'Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 35, nationality: 'Cybertron' },
    { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 13, nationality: 'Cybertron' },
    { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 3, nationality: 'Cybertron' },
    { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 37, nationality: 'Cybertron' },
    { name: 'Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 10, nationality: 'Cybertron' },
    { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { name: 'Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];

  public columnFilter: Array<string> = [
    'name',
    'cpf',
    'code',
  ];
}
```

###### `template`

```html
<dss-data-table [dataSource]="dataSource" [columnFilter]="columnFilter">
  <header dssDataTableHeader>
    <h3 dssDataTableTitle>Data Tables</h3>
    <dss-form-field>
      <input type="text" [(ngModel)]="input" placeholder="Buscar na Tabela" />
      <span dssIcon name="search" rtlt="left"></span>
    </dss-form-field>
  </header>
  <table>
    <ng-container>
      <th *dssHeaderCell dssSort column="name">Nome</th>
      <td *dssCell="let element">{{ element.name }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>CPF</th>
      <td *dssCell="let element">{{ element.cpf }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell dssSort column="code">Registro</th>
      <td *dssCell="let element">{{ element.code }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Idade</th>
      <td *dssCell="let element">{{ element.age }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell>Nacionalidade</th>
      <td *dssCell="let element">{{ element.nationality }}</td>
    </ng-container>
    <ng-container>
      <th *dssHeaderCell></th>
      <ng-container *dssCellActions="let element; let indexRow = indexRow">
        <ul dssFlyoutMenu>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="add-1px"></span>
              <span dssFlyoutMenuLabel>Adicionar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="edit"></span>
              <span dssFlyoutMenuLabel>Editar</span>
            </a>
          </li>
          <li dssFlyoutMenuItem>
            <a href="#" dssFlyoutMenuLink>
              <span dssIcon name="trash-bin"></span>
              <span dssFlyoutMenuLabel>Excluir</span>
            </a>
          </li>
        </ul>
      </ng-container>
    </ng-container>
  </table>
  <dss-pagination optionDefault="10"></dss-pagination>
</dss-data-table>
```

###### `Inputs`

| Name             | Type                 | Default | Obs                                                                                                                                                                                                            |
| ---------------- | -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource       | Array&lt;unknown&gt; | -       | -                                                                                                                                                                                                              |
| fixedColumns     | number               | -1      | Número de colunas a serem fixadas.                                                                                                                                                                             |
| hasCustomSorting | Boolean              | false   | Desabilita o sorting nativo quando o sorting é controlado externamente                                                                                                                                         |
| columnFilter     | Array&lt;string&gt;  | []      | Lista das colunas onde a pesquisa deve acontecer, por default todas as colunas são usadas na pesquisa. O uso dessa propriedade é recomendado em cenários que o data-table pode ter colunas ocultas ao usuário. |

###### `Directives`

| Name                    | Type | Default | Obs                                                                                                   |
| ----------------------- | ---- | ------- | ----------------------------------------------------------------------------------------------------- |
| dssHeaderCell           | -    | -       | Diretiva estrutural para ser usada com a tag th.                                                      |
| dssCell                 | -    | -       | Diretiva estrutural para ser usada com a tag td.                                                      |
| dssCellActions          | -    | -       | Diretiva estrutural para ser usada com ng-container quando usado o estilo default dos botões de ação. |
| dssSort                 | -    | -       | Inputs: column (nome da coluna no objeto) e order (ordenação, possíveis valores: asc ou desc).        |
| dssDataTableHeader      | -    | -       | Adiciona a classe para estilizar o header.                                                            |
| dssDataTableTitle       | -    | -       | Adiciona a classe para estilizar o título.                                                            |
| dssDataTableCheckboxAll | -    | -       | Controla o checkbox que seleciona todos os itens visíveis.                                            |
| dssDataTableCheckboxRow | -    | -       | Controla o checkbox por linha.                                                                        |
| dssDataTableRadioGroup  | -    | -       | Controla o radio-group por linha.                                                                     |

###### `Inputs - dssDataTableCheckboxRow/dssDataTableRadioGroup`

| Name         | Type                 | Default | Obs |
| ------------ | -------------------- | ------- | --- |
| dataTableRow | Array&lt;unknown&gt; | -       | -   |

###### `Inputs - dssSort`

| Name      | Type     | Default | Obs                 |
| --------- | -------- | ------- | ------------------- |
| column    | string   | -       | -                   |
| order     | string   | -       | Opções: asc ou desc |
| compareFn | Function | -       | Função de ordenação |

###### `Structural Components`

| Name                     | Type | Default | Obs                                                                |
| ------------------------ | ---- | ------- | ------------------------------------------------------------------ |
| dss-data-table-not-found | -    | -       | Ajuda a customizar a mensagem pra itens não encontrados no filtro. |

###### `Support Classes - @deprecated`

| Name                       | Type | Default | Obs                                                                                   |
| -------------------------- | ---- | ------- | ------------------------------------------------------------------------------------- |
| DssDataTableWithCheckbox   | -    | -       | Classe com lógica para ser usada em um data-table com checkbox. [e.g.](#com-checkbox) |
| DssDataTableWithRadioGroup | -    | -       | Classe com lógica para ser usada em um data-table com radio. [e.g.](#com-radio-group) |

&nbsp;

<br />

## Executar testes

```sh
npm run test
```
