<h1 align="center">Bem vindo ao @dss/components/dropdown 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Dropdown.

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
import { DssDropdownModule } from '@dss/components/dropdown';

import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssDropdownModule,
  ],
  exports: [DropdownComponent],
})
export class DropdownModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';
import { DssOptionGroupInterface, DssOptionInterface } from '@dss/components/dropdown';

interface CustomizedInterface extends DssOptionInterface {
  icon: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  public teams: Array<DssOptionInterface> = [
    { value: '', viewValue: 'None' },
    { value: 'Internacional', viewValue: 'Internacional' },
    { value: 'Vasco', viewValue: 'Vasco' },
    { value: 'Atlético-MG', viewValue: 'Atlético-MG' },
    { value: 'Palmeiras', viewValue: 'Palmeiras' },
    { value: 'São Paulo', viewValue: 'São Paulo' },
    { value: 'Santos', viewValue: 'Santos' },
    { value: 'Fluminense', viewValue: 'Fluminense' },
    { value: 'Bahia', viewValue: 'Bahia' },
    { value: 'Grêmio', viewValue: 'Grêmio' },
    { value: 'Athletico-PR', viewValue: 'Athletico-PR' },
    { value: 'Botafogo', viewValue: 'Botafogo' },
    { value: 'Bragantino', viewValue: 'Bragantino' },
    { value: 'Flamengo', viewValue: 'Flamengo' },
    { value: 'Corinthians', viewValue: 'Corinthians' },
    { value: 'Goiás', viewValue: 'Goiás' },
    { value: 'Fortaleza', viewValue: 'Fortaleza' },
    { value: 'Atlético-GO', viewValue: 'Atlético-GO' },
    { value: 'Sport', viewValue: 'Sport' },
    { value: 'Ceará', viewValue: 'Ceará' },
    { value: 'Coritiba', viewValue: 'Coritiba' },
  ];

  public selectedTeam: string;

  public pokemonGroups: Array<DssOptionGroupInterface> = [
    {
      name: 'Grass',
      options: [
        { value: 'bulbasaur', viewValue: 'Bulbasaur' },
        { value: 'oddish', viewValue: 'Oddish' },
        { value: 'bellsprout', viewValue: 'Bellsprout' },
      ],
    },
    {
      name: 'Water',
      options: [
        { value: 'squirtle', viewValue: 'Squirtle' },
        { value: 'psyduck', viewValue: 'Psyduck' },
        { value: 'horsea', viewValue: 'Horsea' },
      ],
    },
    {
      name: 'Fire',
      options: [
        { value: 'charmander', viewValue: 'Charmander' },
        { value: 'vulpix', viewValue: 'Vulpix' },
        { value: 'flareon', viewValue: 'Flareon' },
      ],
    },
    {
      name: 'Psychic',
      options: [
        { value: 'mew', viewValue: 'Mew' },
        { value: 'mewtwo', viewValue: 'Mewtwo' },
      ],
    },
  ];

  public selectedPokemon: string;

  public teamsCustomized: Array<CustomizedInterface> = [
    { icon: 'firewall', value: 'All', viewValue: 'Selecionar tudo' },
    { icon: 'add-to-calendar', value: 'Internacional', viewValue: 'Internacional' },
    { icon: 'add-photo', value: 'Vasco', viewValue: 'Vasco' },
    { icon: 'add-in-a-circle', value: 'Atlético-MG', viewValue: 'Atlético-MG' },
    { icon: 'add-1px', value: 'Palmeiras', viewValue: 'Palmeiras' },
    { icon: 'account-user', value: 'São Paulo', viewValue: 'São Paulo' },
    { icon: 'account-search-pound', value: 'Santos', viewValue: 'Santos' },
    { icon: 'account-search-euro', value: 'Fluminense', viewValue: 'Fluminense' },
    { icon: 'account-search-dollar' value: 'Bahia', viewValue: 'Bahia' },
    { icon: 'account-pound', value: 'Grêmio', viewValue: 'Grêmio' },
    { icon: 'account-people', value: 'Athletico-PR', viewValue: 'Athletico-PR' },
    { icon: 'account-management-pound', value: 'Botafogo', viewValue: 'Botafogo' },
    { icon: 'account-management-euro', value: 'Bragantino', viewValue: 'Bragantino' },
    { icon: 'account-management-dollar', value: 'Flamengo', viewValue: 'Flamengo' },
    { icon: 'account-group-pound', value: 'Corinthians', viewValue: 'Corinthians' },
    { icon: 'account-group-euro', value: 'Goiás', viewValue: 'Goiás' },
    { icon: 'account-group-dollar', value: 'Fortaleza', viewValue: 'Fortaleza' },
    { icon: 'account-euro', value: 'Atlético-GO', viewValue: 'Atlético-GO' },
    { icon: 'account-dollar', value: 'Sport', viewValue: 'Sport' },
    { icon: 'account-bonus-pound', value: 'Ceará', viewValue: 'Ceará' },
    { icon: 'account-bonus-euro', value: 'Coritiba', viewValue: 'Coritiba' },
  ];

  public selectedTeamCustomized: CustomizedInterface;

  public optionsPokemonFilter: Array<DssOptionInterface> = [
    { value: 'bulbasaur', viewValue: 'Bulbasaur' },
    { value: 'oddish', viewValue: 'Oddish' },
    { value: 'bellsprout', viewValue: 'Bellsprout' },
    { value: 'squirtle', viewValue: 'Squirtle' },
    { value: 'psyduck', viewValue: 'Psyduck' },
    { value: 'horsea', viewValue: 'Horsea' },
    { value: 'charmander', viewValue: 'Charmander' },
    { value: 'vulpix', viewValue: 'Vulpix' },
    { value: 'flareon', viewValue: 'Flareon' },
    { value: 'mew', viewValue: 'Mew' },
    { value: 'mewtwo', viewValue: 'Mewtwo' },
  ];

  public selectedFilterPokemon: string;
}
```

###### `template`

```html
<h4>Options</h4>
<dss-form-field>
  <dss-dropdown [(ngModel)]="selectedTeam" [options]="teams">
    <span *dssOption="let team">{{ team.viewValue }}</span>
  </dss-dropdown>
  <label dssLabel>Selecione um time</label>
  <span dssHint>*Campo obrigatório</span>
</dss-form-field>
<br />
<br />
<h4>Option Groups</h4>
<dss-form-field>
  <dss-dropdown [(ngModel)]="pokemon" [optionGroups]="pokemonGroups">
    <span *dssOptionGroup="let optGroup">{{ optGroup }}</span>
    <span *dssOption="let option">{{ option.viewValue }}</span>
  </dss-dropdown>
  <label dssLabel>Selecione um pokemon</label>
  <span dssHint>*Campo obrigatório</span>
</dss-form-field>
<br />
<br />
<h4>Customized</h4>
<dss-form-field>
  <dss-dropdown [(ngModel)]="selectedTeamCustomized" [options]="teamsCustomized">
    <span *dssSelectedOption="let team"><span dssIcon [name]="team.icon"></span> - {{ team.viewValue }}</span>
    <span *dssOption="let team"><span dssIcon [name]="team.icon"></span> - {{ team.viewValue }}</span>
  </dss-dropdown>
  <label dssLabel>Selecione um time</label>
  <span dssHint>*Campo obrigatório</span>
</dss-form-field>
<br />
<br />
<h4>Filter</h4>
<dss-form-field>
  <dss-dropdown [(ngModel)]="selectedFilterPokemon" [options]="optionsPokemonFilter">
    <input type="text" dssDropdownFilter placeholder="Buscar" />
    <span *dssOption="let option">{{ option.viewValue }}</span>
  </dss-dropdown>
  <label dssLabel>Selecione um pokemon</label>
</dss-form-field>
```

###### `Inputs`

| Name          | Type                                 | Default | Obs                                                        |
| ------------- | ------------------------------------ | ------- | ---------------------------------------------------------- |
| id            | string                               | uuid    | -                                                          |
| disabled      | boolean                              | false   | -                                                          |
| tabIndex      | string                               | '0'     | -                                                          |
| multiple      | boolean                              | false   | -                                                          |
| options       | Array&lt;DssOptionInterface&gt;      | []      | { value: string, viewValue: string, checkAll: boolean }    |
| optionGroups  | Array&lt;DssOptionGroupInterface&gt; | []      | { name: string: options: Array&lt;DssOptionInterface&gt; } |
| raw           | boolean                              | false   | -                                                          |
| openDirection | string                               | down    | opções: up ou down                                         |

###### `Outputs`

| Name            | Type                                                                                                   | Obs                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| openedChange    | EventEmitter&lt;boolean&gt;                                                                            | Evento disparado ao abrir/fechar dropdown                                                                                                                   |
| selectionChange | EventEmitter&lt;string, Array&lt;string&gt;, DssOptionInterface ou Array&lt;DssOptionInterface&gt;&gt; | Se o valor de raw é false (default) retorna a string ou Array&lt;string&gt; se true retorna um objeto DssOptionInterface ou Array&lt;DssOptionInterface&gt; |

###### `Directives`

| Name              | Type | Default | Obs                                                 |
| ----------------- | ---- | ------- | --------------------------------------------------- |
| dssOption         | -    | -       | Diretiva estrutural para ser usada com a tag span.  |
| dssOptionGroup    | -    | -       | Diretiva estrutural para ser usada com a tag span.  |
| dssSelectedOption | -    | -       | Diretiva estrutural para ser usada com a tag span.  |
| dssDropdownFilter | -    | -       | Diretiva estrutural para ser usada com a tag input. |

###### `Support Interfaces`

| Name                    | Type                                                       | Default | Obs |
| ----------------------- | ---------------------------------------------------------- | ------- | --- |
| DssOptionInterface      | { value: string, viewValue: string }                       | -       | -   |
| DssOptionGroupInterface | { name: string: options: Array&lt;DssOptionInterface&gt; } | -       | -   |

## Executar testes

```sh
npm run test
```
