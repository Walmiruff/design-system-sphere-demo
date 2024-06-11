import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DssOptionGroupInterface } from '@dss/components/dropdown';

@Component({
  templateUrl: './input.component.html',
})
export class InputComponent {
  public input1 = new FormControl('');
  public input2 = '';
  public input3 = '';
  public input4 = 'Input 4';

  public disabled = true;

  public formGroup: FormGroup | any;

  public selectedOpt: Array<string> | any;

  public optGroups: Array<DssOptionGroupInterface> = [
    {
      name: 'Opt1',
      options: [
        { value: 'Option1', viewValue: 'Option 1'},
        { value: 'Option2', viewValue: 'Option 2'}
      ]
    },
    {
      name: 'Opt2',
      options: [
        { value: 'Option1', viewValue: 'Option 1'},
        { value: 'Option2', viewValue: 'Option 2'}
      ]
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
      ]],
      address: ['', Validators.required],
      dropdownForm: ['',Validators.required],
    });
  }

  public testDisabled(): void {
    this.disabled = !this.disabled;
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

  public isError(name: string): boolean {
    return this.formGroup.get(name).invalid && this.formGroup.get(name).dirty && this.formGroup.get(name).touched;
  }

  public isSuccess(name: string): boolean {
    return this.formGroup.get(name).valid && this.formGroup.get(name).dirty && this.formGroup.get(name).touched;
  }
}
