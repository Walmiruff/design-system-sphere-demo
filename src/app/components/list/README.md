<h1 align="center">Bem vindo ao @dss/components/list 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.3.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente List.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssIconModule } from '@dss/components/icon';
import { DssListModule } from '@dss/components/list';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DssIconModule,
    DssListModule,
  ],
})
export class AppModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {}
```

###### `template`

###### `Texto & Ações`

```html
<dss-list type="text">
  <dss-list-item>
    <dss-list-item-title>List Value</dss-list-item-title>
    <dss-list-item-actions>
      <span dssIcon name="add-1px"></span>
      <span dssIcon name="edit"></span>
      <span dssIcon name="trash-bin"></span>
    </dss-list-item-actions>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>List Value</dss-list-item-title>
    <dss-list-item-actions>
      <span dssIcon name="add-1px"></span>
      <span dssIcon name="edit"></span>
      <span dssIcon name="trash-bin"></span>
    </dss-list-item-actions>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>List Value</dss-list-item-title>
    <dss-list-item-actions>
      <span dssIcon name="add-1px"></span>
      <span dssIcon name="edit"></span>
      <span dssIcon name="trash-bin"></span>
    </dss-list-item-actions>
  </dss-list-item>
</dss-list>
```

###### `Valor`

```html
<dss-list type="value">
  <dss-list-item>
    <dss-list-item-title>1 - List Value</dss-list-item-title>
    <dss-list-item-content>R$ 999.999.999.999,97</dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>2 - List Value</dss-list-item-title>
    <dss-list-item-content>R$ 999.999.999.999,98</dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>3 - List Value</dss-list-item-title>
    <dss-list-item-content>R$ 999.999.999.999,99</dss-list-item-content>
  </dss-list-item>
</dss-list>
```

###### `Colunas`

```html
<dss-list type="columned">
  <dss-list-item>
    <dss-list-item-title>1 - List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>2 - List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>3 - List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
</dss-list>
```

###### `Descrição`

```html
<dss-list type="description">
  <dss-list-item>
    <span dssIcon name="minus-in-a-circle"></span>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <span dssIcon name="recurrent-payment-dollar"></span>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
  <dss-list-item>
    <span dssIcon name="american"></span>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
  </dss-list-item>
</dss-list>
```

###### `Descrição & Caption`

```html
<dss-list type="description">
  <dss-list-item>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
    <dss-list-item-caption>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti distinctio ea, et ex excepturi, facilis fuga id illo
        inventore itaque iusto nesciunt soluta temporibus voluptatibus. Facilis perspiciatis sit totam.
      </p>
    </dss-list-item-caption>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
    <dss-list-item-caption>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti distinctio ea, et ex excepturi, facilis fuga id illo
        inventore itaque iusto nesciunt soluta temporibus voluptatibus. Facilis perspiciatis sit totam.
      </p>
    </dss-list-item-caption>
  </dss-list-item>
  <dss-list-item>
    <dss-list-item-title>List Title</dss-list-item-title>
    <dss-list-item-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse itaque iure nam quaerat quos rem tempora. A adipisci aliquam,
      ex illo inventore ipsum laudantium modi, nam neque omnis, sequi?
    </dss-list-item-content>
    <dss-list-item-caption>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti distinctio ea, et ex excepturi, facilis fuga id illo
        inventore itaque iusto nesciunt soluta temporibus voluptatibus. Facilis perspiciatis sit totam.
      </p>
    </dss-list-item-caption>
  </dss-list-item>
</dss-list>
```

###### `Inputs`

| Name | Type   | Default | Obs                                          |
| ---- | ------ | ------- | -------------------------------------------- |
| type | string | -       | opções: text, value, columned ou description |

###### `Outputs`

| Name          | Type                       | Obs                                                         |
| ------------- | -------------------------- | ----------------------------------------------------------- |
| clickListItem | EventEmitter&lt;number&gt; | O índice do item da lista. Para tipos column e description. |

###### `Structural Components`

| Name                  | Type | Default | Obs |
| --------------------- | ---- | ------- | --- |
| dss-list-item         | -    | -       | -   |
| dss-list-item-actions | -    | -       | -   |
| dss-list-item-caption | -    | -       | -   |
| dss-list-item-content | -    | -       | -   |
| dss-list-item-title   | -    | -       | -   |

## Executar testes

```shell
npm run test
```
