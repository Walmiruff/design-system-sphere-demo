import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './text-area.component.html',
})
export class TextAreaComponent {
  public textArea1 = '';
  public textArea2 = '';
  public textArea3 = '';
  public textArea4 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae culpa earum eius esse eveniet excepturi, facilis harum in, ipsum iste magni non odit sint sit suscipit vitae voluptas voluptates.';
  public textArea5 = '';
  public textArea6 = '';
  public textArea7 = '';

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      textArea5: [this.textArea5, [
        Validators.required,
        Validators.minLength(2),
      ]],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }
}
