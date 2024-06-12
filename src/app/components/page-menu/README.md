<h1 align="center">Bem vindo ao @dss/components/page-menu 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.20.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Page Menu.

## Instalação

```shell
npm install
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssDividerModule } from '@dss/components/divider';
import { DssPageMenuModule } from '@dss/components/page-menu';

import { PageMenuComponent } from './page-menu.component';

@NgModule({
  declarations: [PageMenuComponent],
  imports: [
    CommonModule,
    DssDividerModule,
    DssPageMenuModule,
  ],
})
export class PageMenuModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
})
export class PageMenuComponent { }
```

###### `template`

###### `Default`

```html
<dss-page-menu>
  <dss-page-menu-title>Pagamentos</dss-page-menu-title>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Boletos e Faturas</dss-page-menu-list-title>
    <dss-page-menu-list-item [isNew]="true">
      <a [routerLink]="['/']">Com código de barras</a><!-- It is possible to use routerLink -->
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Boletos em cartório
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura Bradesco
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura America Express
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura outros bancos
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Pagamentos realizados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Agendamentos
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>IPVA</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Demais estados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>DPVAT</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Demais estados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Licenciamento</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo 2ª via
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item [isNew]="true">
      Demais estados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Consultar calendário
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>1º Registro</dss-page-menu-list-title>
    <dss-page-menu-list-description>Veículos 0 km</dss-page-menu-list-description>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Taxa DETRAN</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Multas</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      São Paulo
      <dss-page-menu-list-description>Veículos de São Paulo</dss-page-menu-list-description>
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Paraná
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Rio Grande do Sul
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Multas demais estados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Transferência de veículo</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Paraná
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Rio Grande do Sul
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      2ª via transferência
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Tributos federais</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      GPS
      <dss-page-menu-list-description>Guia de Previdência Social</dss-page-menu-list-description>
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      DARF
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item [isNew]="true">
      IRPF
      <dss-page-menu-list-description>Imposto de Renda Pessoa física</dss-page-menu-list-description>
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Tributos municipais</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      IPTU SP
      <dss-page-menu-list-description>Via código do contribuinte</dss-page-menu-list-description>
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Tarifas e pacotes de serviços</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      Consultar
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
</dss-page-menu>
```

###### `template`

###### `With Height`

```html
<dss-page-menu [height]="510"><!-- 510px equals the height of the largest dss-page-menu-list -->
  <dss-page-menu-title>Pagamentos</dss-page-menu-title>
  <dss-page-menu-list>
    <dss-page-menu-list-title>Boletos e Faturas</dss-page-menu-list-title>
    <dss-page-menu-list-item [isNew]="true">
      Com código de barras
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Boletos em cartório
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura Itaú
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura America Express
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Fatura outros bancos
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Pagamentos realizados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Agendamentos
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
  <dss-page-menu-list>
    <dss-page-menu-list-title>IPVA</dss-page-menu-list-title>
    <dss-page-menu-list-item>
      Minas Gerais
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      São Paulo
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Demais estados
      <hr dssDivider>
    </dss-page-menu-list-item>
    <dss-page-menu-list-item>
      Comprovantes
      <hr dssDivider>
    </dss-page-menu-list-item>
  </dss-page-menu-list>
</dss-page-menu>
```

###### `Inputs - Page Menu`
Name   | Type   | Default | Obs                                                                                                          |
------ | ------ | ------- | ------------------------------------------------------------------------------------------------------------ |
height | number | -       | Se o número de dss-page-menu-list for pequeno, esta propriedade pode ajudar a ajustar a altura do contêiner. |

###### `Inputs - Page Menu List Item`
Name  | Type    | Default | Obs |
----- | ------- | ------- | --- |
isNew | boolean | false   | -   |

###### `Structural Components`
Name                           | Type | Default  | Obs |
------------------------------ | ---- | -------- | --- |
dss-page-menu-title            | -    | -        | -   |
dss-page-menu-list             | -    | -        | -   |
dss-page-menu-list-item        | -    | -        | -   |
dss-page-menu-list-title       | -    | -        | -   |
dss-page-menu-list-description | -    | -        | -   |

## Executar testes

```shell
npm run test
```
