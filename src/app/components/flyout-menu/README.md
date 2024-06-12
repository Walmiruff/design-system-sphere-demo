<h1 align="center">Bem vindo ao @dss/components/flyout-menu 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Flyout Menu.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssFlyoutMenuModule } from '@dss/components/flyout-menu';

import { AppComponent } from './app.component';
import { FlyoutMenuComponent } from './flyout-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyoutMenuComponent
  ],
  imports: [
    BrowserModule,
    DssFlyoutMenuModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-flyout-menu',
  templateUrl: './flyout-menu.component.html'
})
export class FlyoutMenuComponent { }
```

###### `template`

###### `Padrão`

```html
<ul dssFlyoutMenu>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssIcon name="add-1px"></span>
      <span dssFlyoutMenuLabel>Adicionar</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssIcon name="add-1px"></span>
      <span dssFlyoutMenuLabel>Editar</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssIcon name="trash-bin"></span>
      <span dssFlyoutMenuLabel>Excluir</span>
    </a>
  </li>
</ul>
```

###### `Sem Ícones`

```html
<ul dssFlyoutMenu>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Morte</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Casas</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Presente</span>
    </a>
  </li>
</ul>
```

###### `Com Ícone de Seta para Direita`

```html
<ul dssFlyoutMenu [links]="true">
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Morte</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Casas</span>
    </a>
  </li>
  <li dssFlyoutMenuItem>
    <a href="#" dssFlyoutMenuLink>
      <span dssFlyoutMenuLabel>Presente</span>
    </a>
  </li>
</ul>
```

###### `Inputs`
Name  | Type    | Default | Obs                       |
----- | ------- | ------- | ------------------------- |
links | boolean | false   | no DssFlyoutMenuDirective |

## Executar testes

```shell
npm run test
```
