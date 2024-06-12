<h1 align="center">Bem vindo ao @dss/components/checkbox 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Checkbox.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DssCheckboxModule } from '@dss/components/checkbox';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssCheckboxModule,
  ],
  exports: [CheckboxComponent],
})
export class CheckboxModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

  public checkbox = false;

}
```

###### `template`

```html
  <dss-checkbox name="checkbox" label="Checkbox" [(ngModel)]="checkbox"></dss-checkbox>
```

###### `Inputs`
Name          | Type    | Default | Obs                                                            |
------------- | ------- | ------- | --                                                             |
value         | string  | -       | -                                                              |
name          | string  | -       | -                                                              |
label         | string  | -       | Depreciado, use o componente passando um template dentro dele. |
id            | string  | uuid    | -                                                              |
required      | boolean | -       | -                                                              |
checked       | boolean | false   | -                                                              |
disabled      | boolean | false   | -                                                              |
tabIndex      | string  | 0       | -                                                              |
indeterminate | boolean | -       | -                                                              |

###### `Outputs`
Name   | Type                                  | Obs |
------ | ------------------------------------- | --- |
change | EventEmitter&lt;DssCheckboxChange&gt; | -   |
blur   | EventEmitter&lt;Event&gt;             | -   |
focus  | EventEmitter&lt;Event&gt;             | -   |

###### `Support Classes`
Name              | Type                                               | Default  | Obs |
----------------- | -------------------------------------------------- | -------- | --- |
DssCheckboxChange | { source: DssCheckboxComponent, checked: boolean } | -        | -   |

## Executar testes

```sh
npm run test
```
