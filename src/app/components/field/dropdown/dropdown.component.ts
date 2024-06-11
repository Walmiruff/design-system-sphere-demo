import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DssOptionGroupInterface, DssOptionInterface } from '@dss/components/dropdown';
import { DssI18nService } from '@dss/components/i18n';

interface CustomizedInterface extends DssOptionInterface {
  icon: string;
}

const teams: Array<DssOptionInterface> = [
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

const pokemons: Array<DssOptionGroupInterface> = [
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

const optionsLarge = [
  {
    value: 'option1',
    viewValue:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis deleniti eaque esse est excepturi facilis ' +
      'ipsa maxime minus nam nemo, odit omnis placeat quo quod repellat soluta unde veritatis.',
  },
  {
    value: 'option2',
    viewValue:
      'Beatae dicta doloribus, eligendi, et in ipsam laboriosam maiores molestiae non nostrum optio, recusandae rem sapiente vel ' +
      'voluptate voluptatem voluptates voluptatum. Dolor, dolore doloremque magnam necessitatibus provident quam repudiandae tenetur.',
  },
  {
    value: 'option3',
    viewValue:
      'Architecto debitis deleniti, dolore doloribus ea error explicabo fugiat impedit magni maiores minima minus modi nulla quod ' +
      'repellat ut voluptate! Aspernatur corporis expedita sequi tenetur totam. Consequatur cupiditate eveniet veritatis?',
  },
];

const pokemonList: Array<DssOptionInterface> = [
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

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  public raw = true;

  public teams: Array<DssOptionInterface> = teams;

  public teamsAll = [
    { value: 'Selecionar_tudo', viewValue: 'Selecionar tudo', checkAll: true },
    ...teams,
  ];

  public selectedTeam: string;

  public selectedTeams: Array<string>;

  public selectedFilterTeams: Array<string>;

  public selectedTeamsAll: Array<string>;

  public selectedTeam1 = { value: 'São Paulo', viewValue: 'São Paulo' };

  public selectedTeam2: string;

  public selectedTeams3 = [
    'São Paulo',
    'Corinthians',
  ];

  public pokemon;

  public pokemonFilter;

  public pokemonGroups: Array<DssOptionGroupInterface> = pokemons;

  public pokemonGroupsAll = [
    { name: '', options: [{ value: 'todos', viewValue: 'Selecionar Todos', checkAll: true }] },
    ...pokemons,
  ];

  public selectedPokemon: Array<string>;

  public selectedFilterGroupPokemon: Array<string>;

  public selectedPokemonAll: Array<string>;

  public selectedTeamCustomized: CustomizedInterface;

  public formGroup: FormGroup;

  public teamsCustomized = (teams as Array<CustomizedInterface>).map((team) => ({
    icon: 'trophy',
    ...team,
  }));

  public optionsLarge: Array<DssOptionInterface> = optionsLarge;

  public selectedOptionLarge = new FormControl('');

  public months$: Observable<Array<DssOptionInterface>>;

  public selectedMonth: Array<string>;

  public selectedMonths: Array<string>;

  public textDropdown1 = 'Mês';

  public textDropdown2 = 'Meses';

  public monthGroups$: Observable<Array<DssOptionGroupInterface>>;

  public selectedMonthGroups: Array<string>;

  public selectedMonthsGroups: Array<string>;

  public selectedFilterPokemon = '';

  public optionsPokemonFilter: Array<DssOptionInterface> = pokemonList;

  public optionGroupsPokemonFilter: Array<DssOptionGroupInterface> = [...pokemons];

  public optionsTeamsFilter: Array<DssOptionInterface> = teams;

  public optionGroupsPokemonFilter2: Array<DssOptionGroupInterface> = [...pokemons];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _translationService: DssI18nService,
    private readonly _cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.setMonths();
    this.setMonthGroups();

    this.formGroup = this._formBuilder.group({
      dropdownForm: [
        '',
        [Validators.required],
      ],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

  public changeOptions() {
    this.months$ = of([
      { value: 'abacate', viewValue: 'Abacate' },
      { value: 'banana', viewValue: 'Banana' },
      { value: 'melancia', viewValue: 'Melancia' },
    ]);

    this.textDropdown1 = 'Fruta';
    this.textDropdown2 = 'Frutas';

    this._cdr.detectChanges();
  }

  private setMonths(): void {
    this.months$ = (this._translationService.get('CALENDAR.MONTHS') as Observable<unknown>).pipe(
      map((data) => {
        const array = [];
        for (const [
          key,
          value,
        ] of Object.entries(data)) {
          array.push({ value: key, viewValue: value });
        }
        return array;
      }),
    );
  }

  private setMonthGroups(): void {
    this.monthGroups$ = (this._translationService.get('CALENDAR.MONTHS') as Observable<unknown>).pipe(
      map((data) => {
        const array = [];
        for (const [
          key,
          value,
        ] of Object.entries(data)) {
          array.push({ value: key, viewValue: value });
        }
        return [
          {
            name: 'Grupo de valores dinâmico',
            options: array,
          },
        ];
      }),
    );
  }
}
