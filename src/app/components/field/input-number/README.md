<h1 align="center">Bem vindo ao @dss/components/input-number 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.12.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Input Number.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DssFormFieldModule } from '@dss/components/form-field';
import { DssInputNumberModule } from '@dss/components/input-number';

import { InputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DssFormFieldModule,
    DssInputNumberModule,
  ],
  exports: [InputNumberComponent],
})
export class InputNumberModule { }
```

###### `component`

```ts
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

  public input2;

  public input3 = 42;

  public input4 = 23.45;

  public formGroup: FormGroup;

  public input6 = 0;

  public input7 = 0;

  public input8 = -100;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      input5: [0, [Validators.required, Validators.min(0.01), Validators.max(10)]],
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
```

###### `template`

###### `Default`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="Valor" [(ngModel)]="input1" dssInputNumber>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Com dssIconClear *`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="Valor" [(ngModel)]="inputClear" dssInputNumber>
  <span dssHint>Digite apenas números</span>
  <span dssIconClear type="text">Limpar</span>
</dss-form-field>
```

###### `Com Ícone`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="Valor" [(ngModel)]="input2" dssInputNumber>
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Com Símbolo Diferente do Real`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="Valor" [(ngModel)]="input3" dssInputNumber [options]="{ prefix: '$ ' }">
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Desabilitado`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="Valor" [(ngModel)]="input4" [disabled]="true" dssInputNumber>
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Em um Formulário *`

```html
<form [formGroup]="formGroup" (ngSubmit)="submit()">
  <dss-form-field [isError]="isError('input5')">
    <input type="tel" inputmode="numeric" aria-label="Valor" formControlName="input5" dssInputNumber>
    <span dssHint>Digite apenas números</span>
  </dss-form-field>
  <br>
  <div dssTypography type="body">{{ formGroup.get('input5').value | currency: 'BRL' }}</div>
  <br>
  <button [disabled]="formGroup.invalid">Enviar</button>
</form>
```

###### `Com Label`

```html
<dss-form-field>
  <input id="input-number-6" type="tel" inputmode="numeric" [(ngModel)]="input6" dssInputNumber>
  <label dssLabel for="input-number-6">Valor</label>
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Com Mínimo e Máximo`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="value" [(ngModel)]="input7" dssInputNumber [options]="{ min: 0, max: 10 }">
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

###### `Com Número Negativo (Já vem por Default)`

```html
<dss-form-field>
  <input type="tel" inputmode="numeric" aria-label="value" [(ngModel)]="input8" dssInputNumber>
  <span dssIcon name="bag-of-money-dollar"></span>
  <span dssHint>Digite apenas números</span>
</dss-form-field>
```

>Quando utilizar o input `isError` para validar o campo não utilizar o dssIconClear pois ele já contém a diretiva que limpa o campo dentro de sua lógica e caso for usado o mesmo irá sobrescrever os ícones de erro.


###### `Inputs`
Name    | Type                                  | Default                                                                            | Obs |
------- | ------------------------------------- | ---------------------------------------------------------------------------------- | --- |
options | Object&lt;DssInputNumberInterface&gt; | { allowNegative: true, prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 } | -   |

###### `Interfaces`
Name                    | Type                                                                                                                           | Default  | Obs |
----------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | --- |
DssInputNumberInterface | { allowNegative: boolean, prefix: string, thousands: string, decimal: string, precision: number, min?: number, max?: number? } | -        | -   |

## Configuração no Módulo

```ts
import { DssInputNumberModule } from '@dss/components/input-number';

const dssInputNumberConfig = {
  allowNegative: false,
  prefix: '$ ',
  thousands: ',',
  decimal: '.',
  precision: 0,
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    DssInputNumberModule.forRoot(dssInputNumberConfig),
  ],
  exports: [...],
})
export class InputNumberModule { }
```

## Executar testes

```shell
npm run test
```
