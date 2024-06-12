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

  public formGroup: FormGroup | any;

  constructor(private _formBuilder: FormBuilder) { }

  public addFruit(event: DssTagInputEventInterface): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
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
    // tslint:disable-next-line:no-backbone-get-set-outside-model
    return this.formGroup.get('animes');
  }

  public addAnime(event: DssTagInputEventInterface): void {
    const input = event.input;
    const value = event.value;

    // Add our anime
    if ((value || '').trim()) {
      this.animes.setValue([...this.animes.value, { name: value.trim() }]);
      this.animes.updateValueAndValidity();
    }

    // Reset the input value
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
