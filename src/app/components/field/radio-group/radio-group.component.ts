import { Component, OnInit } from '@angular/core';
import { DssRadioGroupOptionsInterface } from '@dss/components/radio-group';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
})
export class RadioGroupComponent implements OnInit {

  public options: Array<DssRadioGroupOptionsInterface> = [
    { label: 'radio A', value: 'A' },
    { label: 'radio B', value: 'B' },
    { label: 'radio C', value: 'C' },
    { label: 'radio C', value: 'C' },
  ];

  public value1: string | number | any;

  public value2 = 'B';

  public value3: string | any;

  public value4 = '1';

  public value5 = '';

  public value6 = '';

  public formGroup: FormGroup | any;

  constructor(private _formBuild: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._formBuild.group({
      value6: ['1', [Validators.required]],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

}
