<h1 align="center">Bem vindo ao @dss/components/form-field 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Form Field.

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

import { FormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DssFormFieldModule,
  ],
  exports: [FormFieldComponent],
})
export class FormFieldModule { }
```

###### `component`

```ts
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements OnInit {

  public description = '';

  public formGroup: FormGroup;
  
  public input = null;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
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
```

###### `template`

##### `Input`

```html
<form [formGroup]="formGroup" (submit)="submit()">
  <dss-form-field [isError]="formGroup.get('email').invalid" [isSuccess]="formGroup.get('email').valid">
    <input type="text" formControlName="email">
    <label dssLabel>E-mail</label>
    <span dssIcon name="email"></span>
    <span dssHint>Digite um e-mail válido</span>
    <span *ngIf="formGroup.get('email').errors?.required" dssError>Campo obrigatório!</span>
    <span *ngIf="formGroup.get('email').errors?.email" dssError>E-mail inválido!</span>
    <span *ngIf="formGroup.get('email').errors?.minlength" dssError>Mínimo de 2 caracteres!</span>
  </dss-form-field>
</form>
```

##### `Textarea`

```html
<dss-form-field>
  <textarea [(ngModel)]="description" maxlength="256"></textarea>
  <label dssLabel>Mensagem</label>
  <span dssHint align="start">*Preenchimento obrigatório</span>
  <span dssHint align="end">{{description.length}}/256</span>
</dss-form-field>
```

##### `Input com Opção para Limpar - Ícone`

```html
<dss-form-field>
  <input type="text" [(ngModel)]="input">
  <label dssLabel>Text field</label>
  <span dssIconClear></span>
  <span dssHint>Dica</span>
</dss-form-field>
```

##### `Input com Opção para Limpar - Texto`

```html
<dss-form-field>
  <input type="text" [(ngModel)]="input">
  <label dssLabel>Text field</label>
  <span dssIconClear type="text">Limpar</span>
  <span dssHint>Dica</span>
</dss-form-field>
```

###### `Inputs`
Name      | Type    | Default | Obs                                         |
--------- | ------- | ------- | ------------------------------------------- |
isError   | boolean | false   | Altera o estado do componente para erro.    |
isSuccess | boolean | false   | Altera o estado do componente para sucesso. |

> O estado inicial pode ser alcançado passando false nas propriedades acima. Considere utilizar dirty e/ou touched conforme o exemplo do [Angular](https://v8.angular.io/guide/form-validation).

###### `Directives`
Name         | Type | Default  | Obs                                           |
------------ | ---- | -------- | --------------------------------------------- |
dssLabel     | -    | -        | Diretiva estrutural para ser usada com label. |
dssHint      | -    | -        | Diretiva estrutural para ser usada com span.  |
dssError     | -    | -        | Diretiva estrutural para ser usada com span.  |
dssIconClear | -    | -        | Diretiva estrutural para ser usada com span.  |

###### `Inputs na Diretiva dssHint`
Name  | Type   | Default | Obs                   |
----- | ------ | ------- | --------------------- |
align | string | -       | opções: start ou end. |

###### `Inputs na Diretiva dssIconClear`
Name | Type             | Default | Obs                   |
---- | ---------------- | ------- | --------------------- |
type | DssIconClearType | icon    | opções: icon ou text. |

## Executar testes

```sh
npm run test
```
