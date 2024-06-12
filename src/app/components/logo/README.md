<h1 align="center">Bem vindo ao @dss/components/logo 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.8.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Logo.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssLogoModule } from '@dss/components/logo';

import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    DssLogoModule,
  ],
})
export class LogoModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
```

###### `template`

```html
<dss-logo></dss-logo>
```

###### `Inputs`

| Name   | Type   | Default | Obs                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------ | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height | number | 60      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| width  | number | 80      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| type   | string | generic | opções: alelo, amex, banco-hyundai, banco-nordeste, banco-pan, banco-psa, banco-rci, banes, bank, bb, ben, bradesco, caceis, caixa, dinners, elo, generic, getnet, good-card, good-vale, google-play, hiper, hipercard, inter, itau, itaucard, iti, maestro, mastercard, mercado-pago, nu-bank, paypal, pi, santander-icon, santander-primary, santander-secondary, sim, sodexo, super-digital, ticket, toro, verde-card, visa, votorantim ou vr. |
| size   | string | default | opções: extra-small, small, default, medium, large ou extra-large.                                                                                                                                                                                                                                                                                                                                                                                |
| color  | string | default | opções: default ou white. Opção disponível ao usar algum logo em type.                                                                                                                                                                                                                                                                                                                                                                            |

## Executar testes

```sh
npm run test
```
