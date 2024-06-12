<h1 align="center">Bem vindo ao @dss/components/search-bar 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.8.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Search Bar.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssListModule } from '@dss/components/list';
import { DssSearchBarModule } from '@dss/components/search-bar';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    DssSearchBarModule,
    DssListModule,
  ],
})
export class SearchBarModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

export interface OptionInterface {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  public options1: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
  ];

  public latestSearches1: Array<OptionInterface> = [
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
  ];

  public filteredOptions1: Array<OptionInterface>;

  public options2: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
    { title: 'Four', subtitle: '4' },
  ];

  public filteredOptions2: Array<OptionInterface>;

  public options3: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
    { title: 'Four', subtitle: '4' },
  ];

  public filteredOptions3: Array<OptionInterface>;

  public selectedItem3: OptionInterface;

  public filter1(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions1 = this.options1.filter((option: OptionInterface) => option.title.toLowerCase().includes(filterValue));
  }

  public filter2(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions2 = this.options2.filter((option: OptionInterface) => option.title.toLowerCase().includes(filterValue));
  }

  public filter3(value: string): void {
    const filterValue = value.toLowerCase();
    this.selectedItem3 = undefined;

    if (filterValue.trim().length > 0) {
      this.filteredOptions3 = this.options3.filter((option: OptionInterface) => option.title.toLowerCase().indexOf(filterValue) === 0);
    } else {
      this.filteredOptions3 = [];
    }
  }
}
```

###### `template`

###### `No header`

```html
<header class="header" style="position: relative">
  <ul class="header__list">
    <li class="header__item">
      <dss-search-bar [header]="true">
        <input type="text" dssSearchBarInput (searchValue)="filter1($event)" />
        <dss-autocomplete>
          <dss-autocomplete-item *ngFor="let option of filteredOptions1; index as i">
            <dss-autocomplete-item-title>{{ option.title }}</dss-autocomplete-item-title>
            <dss-autocomplete-item-subtitle>{{ option.subtitle }}</dss-autocomplete-item-subtitle>
          </dss-autocomplete-item>
          <dss-autocomplete-item-last *ngFor="let option of latestSearches1 index as i">
            <dss-autocomplete-item-title>{{ option.title }}</dss-autocomplete-item-title>
          </dss-autocomplete-item-last>
        </dss-autocomplete>
      </dss-search-bar>
    </li>
    <li class="header__item">
      <span class="header__item-list">Notificações</span>
    </li>
    <li class="header__item">
      <span class="header__item-list">Acessar</span>
    </li>
  </ul>
</header>
```

###### `Abrindo para cima`

```html
<dss-search-bar>
  <input type="text" dssSearchBarInput (searchValue)="filter2($event)" />
  <dss-autocomplete openDirection="up">
    <dss-autocomplete-item *ngFor="let option of filteredOptions2; index as i">
      <dss-autocomplete-item-title>{{ option.title }}</dss-autocomplete-item-title>
      <dss-autocomplete-item-subtitle>{{ option.subtitle }}</dss-autocomplete-item-subtitle>
    </dss-autocomplete-item>
  </dss-autocomplete>
</dss-search-bar>
```

###### `Sem autocomplete e com clique`

```html
<dss-search-bar>
  <input type="text" dssSearchBarInput (searchValue)="filter3($event)" />
</dss-search-bar>
<ng-container *ngIf="filteredOptions3?.length > 0">
  <dss-list type="text">
    <dss-list-item *ngFor="let option of filteredOptions3" (click)="selectedItem3 = option">
      <dss-list-item-title>{{ option.title }} - {{ option.subtitle }}</dss-list-item-title>
      <dss-list-item-actions></dss-list-item-actions>
    </dss-list-item>
  </dss-list>
</ng-container>
<br />
<div>{{ selectedItem3 | json }}</div>
```

###### `Desabilitado`

```html
<dss-search-bar [disabled]="true">
  <input type="text" disabled dssSearchBarInput />
</dss-search-bar>
```

###### `Inputs - Search Bar`

| Name     | Type    | Default | Obs |
| -------- | ------- | ------- | --- |
| header   | boolean | false   | -   |
| disabled | boolean | false   | -   |

###### `Inputs - Search Bar Input`

| Name        | Type   | Default | Obs |
| ----------- | ------ | ------- | --- |
| id          | string | uuid    | -   |
| placeholder | string | Buscar  | -   |

###### `Inputs - Autocomplete`

| Name          | Type    | Default | Obs                 |
| ------------- | ------- | ------- | ------------------- |
| open          | boolean | false   | -                   |
| openDirection | string  | down    | Options: down or up |

###### `Output - Search Bar Input`

| Name        | Type   | Default | Obs |
| ----------- | ------ | ------- | --- |
| searchValue | string | -       | -   |

## Executar testes

```shell
npm run test
```
