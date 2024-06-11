import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const cryptography = (character: string): string => {
  const crypto: any = { 1: 'U', 2: 'D', 3: 'T', 4: 'Q', 5: 'C', 6: 'S', 7: '$', 8: 'O', 9: 'N', 0: 'Z' };

  // Se for digitado uma opção válida
  if (crypto[character]) {
    return crypto[character];
  }

  // Para não remover os códigos válidos já digitados
  const cod = /[UDTQCS$ONZ]/gi;
  if (cod.test(character)) {
    return character;
  }

  return '';
};

@Component({
  templateUrl: './mask.component.html',
})
export class MaskComponent implements OnInit {
  public input1 = '';

  public input2 = '';

  public input3 = '';

  public input4 = '';

  public input5 = '';

  public input6 = '';

  public input7 = '';

  public input8 = '';

  public input9 = '';

  public input10 = '';

  public input11 = '12345678900';

  public input12 = '';

  public pattern = { p: { pattern: /[a-zA-Z0-9$]/, transform: cryptography } };

  public formGroup: FormGroup | any;

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      card: [
        null,
        [
          Validators.required,
          Validators.minLength(16),
        ],
      ],
      cvv: [
        null,
        Validators.required,
      ],
      name: [
        null,
        Validators.required,
      ],
    });
  }

  public onSubmit(): void {
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
