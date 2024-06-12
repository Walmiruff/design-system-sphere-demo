<h1 align="center">Bem vindo ao @dss/components/background-status 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Background Status.

## Instalação

```shell
npm install @dss/components
```
## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssBackgroundStatusModule } from '@dss/components/background-status';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DssBackgroundStatusModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { }
```

###### `template`

```html
<div dssBackgroundStatus>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi autem consequuntur cupiditate delectus dicta, harum ipsa labore officiis optio praesentium quae quisquam quo, reprehenderit, sit veniam vero! Architecto.
</div>
<div dssBackgroundStatus type="1">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi autem consequuntur cupiditate delectus dicta, harum ipsa labore officiis optio praesentium quae quisquam quo, reprehenderit, sit veniam vero! Architecto.
</div>
<div dssBackgroundStatus type="2">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi autem consequuntur cupiditate delectus dicta, harum ipsa labore officiis optio praesentium quae quisquam quo, reprehenderit, sit veniam vero! Architecto.
</div>
<div dssBackgroundStatus type="3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi autem consequuntur cupiditate delectus dicta, harum ipsa labore officiis optio praesentium quae quisquam quo, reprehenderit, sit veniam vero! Architecto.
</div>
```

###### `Inputs`
Name | Type   | Default | Obs               |
---- | ------ | ------- | ----------------- |
type | string | -       | opções: 1, 2 ou 3 |

## Executar testes

```sh
npm run test
```
