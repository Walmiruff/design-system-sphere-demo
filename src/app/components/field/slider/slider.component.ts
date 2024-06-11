import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class SliderComponent implements OnInit {

  public value1 = 10;

  public value2 = [3000, 7000];

  public value3 = 50;

  public value4 = 0;

  public value5 = [3000, 7000];

  public value6 = 50;

  public formGroup: FormGroup;

  public min = 1000;

  public max = 10000;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      slider: [0, Validators.min(1)],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.get('slider')
        .setValue(0);
    }
  }

  public updateMinMax(): void {
    if (this.min === 1000) {
      this.min = 500;
      this.max = 800;
    } else {
      this.min = 1000;
      this.max = 10000;
    }
  }

}
