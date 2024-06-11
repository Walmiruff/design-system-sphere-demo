import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

registerLocaleData(pt, 'pt');

@Component({
  templateUrl: './input-number.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class InputNumberComponent implements OnInit {

  public input1 = 100.99;

  public inputClear: any;

  public input2: any;

  public input3 = 42;

  public input4 = 23.45;

  public formGroup: FormGroup | any;

  public input6 = 0;

  public input7 = 0;

  public input8 = -100;

  public input9: any;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      input5: [0, [Validators.required, Validators.min(0.01), Validators.max(10)]],
      input10: [null]
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

  public isError(name: string): boolean {
    return this.formGroup.get(name).invalid && this.formGroup.get(name).dirty && this.formGroup.get(name).value !== 0;
  }

}
