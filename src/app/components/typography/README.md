<h1 align="center">Bem vindo ao @dss/components/typography 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Typography.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DssTypographyModule } from '@dss/components/typography';

import { TypographyComponent } from './typography.component';

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    DssTypographyModule,
  ],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent { }
```

###### `template`

```html
<span dssTypography type="display1">Display 1</span>
```

###### `Inputs`
Name  | Type    | Default | Obs                                                                                                                                                                                             |
----- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
type  | string  | -       | opções: display1, display2, figure1, figure2, figure3, figure4, h1, h2, h3, body ou caption.                                                                                                    |
color | string  | -       | opções: redLight4, redLight1, redDark1, redDark2, grayLight2, grayLight1, gray, grayDark1, grayDark2, grayDark3, black, white, cyan, yellow, green, blueLight5, blueLight3, blueLight2 ou blue. |
bold  | boolean | false   |                                                                                                                                                                                                 |

## Executar testes

```sh
npm run test
```
