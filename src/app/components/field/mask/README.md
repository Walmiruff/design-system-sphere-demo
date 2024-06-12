<h1 align="center">Bem vindo ao @dss/components/mask 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.29.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Mask.

## Instalação

```sh
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DssFormFieldModule } from '@dss/components/form-field';
import { DssMaskModule } from '@dss/components/mask';

import { MaskComponent } from './mask.component';

@NgModule({
  declarations: [MaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DssFormFieldModule,
    DssMaskModule,
  ],
  exports: [MaskComponent],
})
export class MaskModule {}
```

###### `component`

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './mask.component.html',
})
export class MaskComponent implements OnInit {
  public input1 = '';

  public input2 = '';

  public input3 = '';

  public input4 = '';

  public input5 = '12345678900';

  public pattern = { p: { pattern: /[a-zA-Z0-9$]/, transform: this.cryptography } };

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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

  public cryptography(character: string): string {
    const crypto = { 1: 'U', 2: 'D', 3: 'T', 4: 'Q', 5: 'C', 6: 'S', 7: '$', 8: 'O', 9: 'N', 0: 'Z' };

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
  }
}
```

###### `template`

##### `Usando padrões pré definidos`

```html
<dss-form-field>
  <input type="tel" inputmode="number" [(ngModel)]="input1" dssMask="CPF" />
  <label dssLabel>CPF</label>
  <span dssIcon name="document"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

##### `Montando seu padrão`

```html
<dss-form-field>
  <input type="tel" inputmode="number" [(ngModel)]="input2" dssMask="+55 (dd) ddddd-dddd" />
  <label dssLabel>Celular</label>
  <span dssIcon name="phone"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

##### `Montando seu padrão com duas possibilidades`

```html
<dss-form-field>
  <input type="tel" inputmode="number" [(ngModel)]="input3" [dssMask]="['+55 (dd) dddd-dddd', '+55 (dd) ddddd-dddd']" />
  <label dssLabel>Telefone ou Celular</label>
  <span dssIcon name="phone"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

##### `Em um formulário`

```html
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <dss-form-field [isError]="isError('name')" [isSuccess]="isSuccess('name')">
    <input type="text" formControlName="name" dssMask="U* U* U* U* U*" />
    <label dssLabel>Nome</label>
    <span dssIcon name="account-user"></span>
    <span dssHint>Nome Igual no Cartão</span>
    <span *ngIf="formGroup.get('name').errors?.required" dssError>Campo obrigatório!</span>
  </dss-form-field>
  <dss-form-field [isError]="isError('card')" [isSuccess]="isSuccess('card')">
    <input type="tel" inputmode="number" formControlName="card" dssMask="dddd dddd dddd dddd" />
    <label dssLabel>Número do Cartão</label>
    <span dssIcon name="card"></span>
    <span dssHint>Digite apenas números</span>
    <span *ngIf="formGroup.get('card').errors?.required" dssError>Campo obrigatório!</span>
  </dss-form-field>
  <dss-form-field [isError]="isError('cvv')" [isSuccess]="isSuccess('cvv')">
    <input type="tel" inputmode="number" formControlName="cvv" dssMask="ddd" />
    <span dssIcon name="cvv-number"></span>
    <label dssLabel>CVV</label>
    <span dssHint>Código de segurança</span>
    <span *ngIf="formGroup.get('cvv').errors?.required" dssError>Campo obrigatório!</span>
  </dss-form-field>
  <button dssFilledButton [disabled]="formGroup.invalid">Enviar</button>
</form>
```

##### `Usando uma função para transformar o resultado`

```html
<dss-form-field>
  <input type="tel" inputmode="number" [(ngModel)]="input4" dssMask="p*" [maskPattern]="pattern" />
  <label dssLabel>Código</label>
  <span dssIcon name="qr-code"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

##### `Usando como Pipe`

```html
<p>{{ input5 | dssMask: 'CPF' }}</p>
```

###### `Inputs`

| Name        | Type                                       | Default | Obs |
| ----------- | ------------------------------------------ | ------- | --- |
| dssMask     | string, Array&lt;string&gt; ou DssMaskType | -       | -   |
| maskPattern | DssMaskPatternInterface                    | -       | -   |

###### `Interfaces`

| Name                    | Type                                                                                                                                                            | Default | Obs |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- |
| DssMaskPatternInterface | [propName: string]: DssMaskOptionInterface;                                                                                                                     | -       | -   |
| DssMaskOptionInterface  | { pattern?: RegExp; uppercase?: boolean; lowercase?: boolean; transform?: Function; escape?: boolean; repeat?: boolean; type?: string ou Array&lt;string&gt;; } | -       | -   |

###### `Outputs`

| Name     | Type   | Obs                   |
| -------- | ------ | --------------------- |
| rawValue | string | O valor sem a máscara |

## Configuração no Módulo

```ts
import { DssMaskModule, DssMaskPatternInterface } from '@dss/components/mask';

const config: DssMaskPatternInterface = {
  H: { pattern: /[0-9a-fA-F]/, uppercase: true },
  TEL: { type: ['+55 (dd) ddddd-dddd', '+55 (dd) dddd-dddd'] },
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    DssMaskModule.forRoot(config),
  ],
  exports: [...],
})
export class MaskModule { }
```

> É possível configurar novas máscaras através do módulo e disponibilizar na aplicação inteira.
> No exemplo acima temos duas novas máscaras disponíveis `H` para hexadecimal e `TEL` para celular ou telefone com prefixo e DDD

#### Padrões pré definidos

| Mask     | Exemplos                             |
| -------- | ------------------------------------ |
| CEP      | 12345-678                            |
| CPF      | 123.456.789-00                       |
| CNPJ     | 12.345.678/0001-99                   |
| CPF_CNPJ | 123.456.789-00 ou 12.345.678/0001-99 |

#### Possíveis padrões

| Mask | Exemplos   | Obs                             |
| ---- | ---------- | ------------------------------- |
| dddd | 2022       | Apenas dígitos                  |
| AAA  | aB1        | Dígitos e letras (Alfanumérico) |
| SSS  | abC        | Apenas letras                   |
| UUU  | ABC        | Apenas letras em maiúscula      |
| lll  | abc        | Apenas letras em minúsculo      |
| !d d | d 0        | Com `escape`                    |
| A\*  | abcdefg... | Repetição                       |

#### Passando um transformador

## Executar testes

```sh
npm run test
```
