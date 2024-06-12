<h1 align="center">Bem vindo ao @dss/components/radio-group 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Radio Group.

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

import { DssRadioGroupModule } from '@dss/components/radio-group';

import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [RadioGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssRadioGroupModule,
  ],
  exports: [RadioGroupComponent],
})
export class RadioGroupModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

import { DssRadioGroupOptionsInterface } from '@dss/components/radio-group';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
})
export class RadioGroupComponent {

  // Exemplo depreciado use o exemplo com dss-radio-button
  public options: Array<DssRadioGroupOptionsInterface> = [
    { label: 'radio A', value: 'A' },
    { label: 'radio B', value: 'B' },
    { label: 'radio C', value: 'C' },
    { label: 'radio C', value: 'C' },
  ];

  // Exemplo depreciado use o exemplo com dss-radio-button
  public valueOptions: string;
  
  public valueRadioButton: string;
}
```

###### `template`

###### `Com Options - Exemplo depreciado use o exemplo com dss-radio-button`

```html
<dss-radio-group name="radio" [options]="options" [(ngModel)]="valueOptions"></dss-radio-group>
```

###### `Com Radio Button`

```html
<dss-radio-group [(ngModel)]="valueRadioButton">
  <dss-radio-button value="1">Option 1</dss-radio-button>
  <dss-radio-button value="2">Option 2</dss-radio-button>
</dss-radio-group>
```

###### `Com Radio Button e Divider`

```html
<dss-radio-group [(ngModel)]="valueRadioButton">
  <dss-radio-button value="1" [hasDivider]="true">Option 1</dss-radio-button>
  <dss-radio-button value="2" [hasDivider]="true">Option 2</dss-radio-button>
</dss-radio-group>
```

###### `Com Acessibilidade`

```html
<label id="tbb">The Big Bang: The Theory</label>
<dss-radio-group [(ngModel)]="value1" ariaLabelledBy="tbb">
  <dss-radio-button value="penny">Penny</dss-radio-button>
  <dss-radio-button value="sheldon">Sheldon</dss-radio-button>
  <dss-radio-button value="leonard">Leonard</dss-radio-button>
</dss-radio-group>
```

```html
<dss-radio-group [(ngModel)]="value2" ariaLabel="The Big Bang: The Theory">
  <dss-radio-button value="penny">Penny</dss-radio-button>
  <dss-radio-button value="sheldon">Sheldon</dss-radio-button>
  <dss-radio-button value="leonard">Leonard</dss-radio-button>
</dss-radio-group>
```

```html
<dss-radio-group [(ngModel)]="value3" ariaLabel="The Big Bang: The Theory">
  <dss-radio-button ariaLabel="Personagem: Penny" value="penny">Penny</dss-radio-button>
  <dss-radio-button ariaLabel="Personagem: Sheldon" value="sheldon">Sheldon</dss-radio-button>
  <dss-radio-button ariaLabel="Personagem: Leonard" value="leonard">Leonard</dss-radio-button>
</dss-radio-group>
```

###### `Com conteúdo após o Radio Button`

```html
<dss-radio-group [(ngModel)]="valueRadioButton">
  <dss-radio-button value="1">
    Option 1
    <dss-radio-button-after-content>
      <span>Conteúdo adicional option 1</span>
    </dss-radio-button-after-content>
  </dss-radio-button>
  <dss-radio-button value="2">
    Option 2
    <dss-radio-button-after-content>
      <span>Conteúdo adicional option 2</span>
    </dss-radio-button-after-content>
  </dss-radio-button>
</dss-radio-group>
```

###### `Inputs - Radio Group (Usando Options)`
Name            | Type                                       | Default | Obs                                                               |
--------------- | ------------------------------------------ | ------- | ----------------------------------------------------------------- |
ariaLabelledBy  | string                                     | -       | O atributo tem precedência como alternativa de texto do elemento. |
ariaDescribedBy | string                                     | -       | O valor é lido após o rótulo do elemento e o tipo.                |
value           | string                                     | -       | -                                                                 |
name            | string                                     | -       | Depreciado, priorize a utilização do dss-radio-button.            |
id              | string                                     | uuid    | Depreciado, priorize a utilização do dss-radio-button.            |
required        | boolean                                    | -       | Depreciado, priorize a utilização do dss-radio-button.            |
disabled        | boolean                                    | false   | Depreciado, priorize a utilização do dss-radio-button.            |
tabIndex        | string                                     | 0       | Depreciado, priorize a utilização do dss-radio-button.            |
options         | Array&lt;DssRadioGroupOptionsInterface&gt; | -       | Depreciado, priorize a utilização do dss-radio-button.            |

###### `Inputs - Radio Button`
Name       | Type                                       | Default | Obs                                                    |
---------- | ------------------------------------------ | ------- | ------------------------------------------------------ |
value      | string                                     | -       | -                                                      |
name       | string                                     | -       | -                                                      |
ariaLabel  | string                                     | -       | Usado para exibir uma informação subjacente ao option. |
id         | string                                     | uuid    | -                                                      |
checked    | boolean                                    | false   | -                                                      |
required   | boolean                                    | -       | -                                                      |
disabled   | boolean                                    | false   | -                                                      |
tabIndex   | string                                     | 0       | -                                                      |
hasDivider | boolean                                    | false   | -                                                      |

###### `Outputs - Radio Group (Usando Options) - Depreciado, priorize a utilização do dss-radio-button`
Name   | Type                                    | Obs |
------ | --------------------------------------- | --- |
change | EventEmitter&lt;DssRadioGroupChange&gt; | -   |
blur   | EventEmitter&lt;Event&gt;               | -   |
focus  | EventEmitter&lt;Event&gt;               | -   |

###### `Outputs - Radio Button`
Name              | Type                       | Obs |
----------------- | -------------------------- | --- |
changeRadioButton | EventEmitter&lt;string&gt; | -   |
blur              | EventEmitter&lt;Event&gt;  | -   |
focus             | EventEmitter&lt;Event&gt;  | -   |

###### `Support Classes`
Name                | Type                                              | Default  | Obs |
------------------- | ------------------------------------------------- | -------- | --- |
DssRadioGroupChange | { source: DssRadioGroupComponent, value: string } | -        | -   |

###### `Structural Components`
Name                           | Type | Default  | Obs |
------------------------------ | ---- | -------- | --- |
dss-radio-button-after-content | -    | -        | -   |

## Executar testes

```shell
npm run test
```
