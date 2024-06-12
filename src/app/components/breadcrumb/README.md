<h1 align="center">Bem vindo ao @dss/components/breadcrumb 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.14.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Breadcrumb.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssBreadcrumbModule } from '@dss/components/breadcrumb';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    DssBreadcrumbModule,
  ],
})
export class BreadcrumbModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

import { DssBreadcrumbInterface } from '@dss/components/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {

  public items: Array<DssBreadcrumbInterface> = [
    { label: 'Link A', url: '#' },
    { label: 'Link B', url: '#' },
    { label: 'Link C', url: '#' },
    { label: 'Link D', url: '#' },
    { label: 'Link E', url: '#', title: 'Título do link E' },
  ];

}
```

###### `template`

```html
<dss-breadcrumb [items]="items">
  <a *dssBreadcrumbItem="let item" [href]="item.url">{{ item.label }}</a>
  <h1 *dssBreadcrumbItemTitle="let item">{{ item.title }}</h1><!-- Optional -->
</dss-breadcrumb>
```

###### `Inputs`
Name  | Type                                | Default | Obs |
----- | ----------------------------------- | ------- | --- |
items | Array&lt;DssBreadcrumbInterface&gt; | -       | -   |

###### `Directives`
Name                   | Type | Default  | Obs                                                                      |
---------------------- | ---- | -------- | ------------------------------------------------------------------------ |
dssBreadcrumbItem      | -    | -        | Diretiva estrutural para ser usada com a tag a                           |
dssBreadcrumbItemTitle | -    | -        | Diretiva estrutural para ser usada com as tags h1, h2, h3, h4, h5 ou h6. |

###### `Support Interfaces`
Name                   | Type                                           | Default  | Obs |
---------------------- | ---------------------------------------------- | -------- | --- |
DssBreadcrumbInterface | { label: string; url: string; title?: string } | -        | -   |

```shell
npm run test
```
