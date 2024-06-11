import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './input-clear.component.html',
})
export class InputClearComponent {
  public input1 = '';
  public input2 = '';
  public input3 = '';
  public input4 = 'Input 4';
  public input5 = '';

  public disabled = true;

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
      ]],
      address: ['', Validators.required],
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
