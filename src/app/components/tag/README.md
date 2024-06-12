<h1 align="center">Bem vindo ao @dss/components/tag 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.3.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Tag.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTagModule } from '@dss/components/tag';

import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DssButtonModule,
    DssFormFieldModule,
    DssTagModule,
  ],
})
export class TagModule { }
```

###### `component`

```ts
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DssTagInputEventInterface } from '@dss/components/tag';

interface FruitInterface {
  name: string;
}

interface AnimeInterface {
  name: string;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent implements OnInit {

  public readonly separatorKeysCodes: Array<number> = [ENTER, COMMA];

  public fruits: Array<FruitInterface> = [];

  public formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  public addFruit(event: DssTagInputEventInterface): void {
    const input = event.input;
    const value = event.value;
    
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  public removeFruit(fruit: FruitInterface): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      animes: new FormControl(
        [{ name: 'Dragon Ball' }, { name: 'Naruto' }, { name: 'My Hero Academia' }],
        [Validators.required, Validators.minLength(2)]),
    });
  }

  get animes(): any {
    return this.formGroup.get('animes');
  }

  public addAnime(event: DssTagInputEventInterface): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.animes.setValue([...this.animes.value, { name: value.trim() }]);
      this.animes.updateValueAndValidity();
    }

    if (input) {
      input.value = '';
    }
  }

  public removeAnime(anime: AnimeInterface): void {
    const index = this.animes.value.indexOf(anime);

    if (index >= 0) {
      this.animes.value.splice(index, 1);
      this.animes.updateValueAndValidity();
    }
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

}
```

###### `template`

###### `Padrão`

```html
<dss-tag-list>
  <dss-tag [isActive]="true">Dragon Ball</dss-tag>
  <dss-tag>One Piece</dss-tag>
  <dss-tag>Naruto</dss-tag>
  <dss-tag [disabled]="true">Pokémon</dss-tag>
  <dss-tag>Cavaleiro dos Zodíaco</dss-tag>
  <dss-tag>Death Note</dss-tag>
  <dss-tag>Neon Genesis Evangelion</dss-tag>
  <dss-tag>Fullmetal Alchemist</dss-tag>
</dss-tag-list>
```

###### `Input Tag`

```html
<dss-form-field>
  <dss-tag-list>
    <dss-tag *ngFor="let fruit of fruits" [removable]="true" (removed)="removeFruit(fruit)">{{ fruit.name }}</dss-tag>
    <input dssTagInput type="text" (tagEnd)="addFruit($event)" [separatorKeyCodes]="separatorKeysCodes">
  </dss-tag-list>
  <span dssLabel>Frutas</span>
  <span dssHint>Escreva suas frutas preferidas</span>
</dss-form-field>
```

###### `Input Tag - Desabilitado`

```html
<dss-form-field>
  <dss-tag-list [disabled]="true">
    <dss-tag *ngFor="let fruit of fruits" [removable]="true" (removed)="removeFruit(fruit)">{{ fruit.name }}</dss-tag>
    <input dssTagInput disabled type="text" (tagEnd)="addFruit($event)" [separatorKeyCodes]="separatorKeysCodes">
  </dss-tag-list>
  <span dssLabel>Frutas</span>
  <span dssHint>Escreva suas frutas preferidas</span>
</dss-form-field>
```

###### `Input Tag - Form`

```html
<form [formGroup]="formGroup" (submit)="submit()">
  <dss-form-field [isError]="formGroup.invalid" [isSuccess]="formGroup.valid">
    <dss-tag-list formControlName="animes">
      <dss-tag *ngFor="let anime of animes.value" [removable]="true" (removed)="removeAnime(anime)">{{ anime.name }}</dss-tag>
      <input dssTagInput type="text" (tagEnd)="addAnime($event)" [separatorKeyCodes]="separatorKeysCodes">
    </dss-tag-list>
    <label dssLabel>Animes</label>
    <span dssIcon name="account-dollar"></span>
    <span dssHint>Escreva seus animes preferidos</span>
    <span *ngIf="formGroup.get('animes').errors?.required" dssError>Campo obrigatório!</span>
    <span *ngIf="formGroup.get('animes').errors?.minlength" dssError>É necessário no mínimo 2 animes</span>
  </dss-form-field> 
  <button dssOutlineButton [disabled]="formGroup.invalid">Enviar</button>
</form>
```

###### `Inputs - Tag List`
Name        | Type    | Default | Obs |
----------- | ------- | ------- | --- |
inputHeight | string  | -       | -   |
disabled    | boolean | false   | -   |

###### `Inputs - Tag`
Name      | Type    | Default     | Obs |
--------- | ------- | ----------- | --- |
value     | string  | textContent | -   |
isActive  | boolean | false       | -   |
disabled  | boolean | false       | -   |
removable | boolean | false       | -   |

###### `Inputs - Tag Input`
Name              | Type                | Default      | Obs |
----------------- | ------------------- | ------------ | --- |
separatorKeyCodes | Array&lt;number&gt; | [13] (Enter) | -   |
disabled          | boolean             | false        | -   |

###### `Outputs - Tag`
Name         | Type                                         | Obs |
------------ | -------------------------------------------- | --- |
removed      | EventEmitter&lt;{ tag: DssTagComponent }&gt; | -   |
changeStatus | EventEmitter&lt;boolean&gt;                  | -   |

###### `Outputs - Tag Input`
Name   | Type                                          | Obs |
------ | --------------------------------------------- | --- |
tagEnd | EventEmitter&lt;DssTagInputEventInterface&gt; | -   |

###### `Support Interfaces`
Name                      | Type                                        | Default  | Obs |
------------------------- | ------------------------------------------- | -------- | --- |
DssTagInputEventInterface | { input: HTMLInputElement; value: string; } | -        | -   |

## Executar testes

```shell
npm run test
```
