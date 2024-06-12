<h1 align="center">Bem vindo ao @dss/components/container 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Container.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DssContainerModule } from '@dss/components/container';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DssContainerModule,
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
<div dssContainer>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam aspernatur deserunt distinctio error eum hic id illo impedit incidunt ipsa, minima non perferendis perspiciatis quisquam rerum soluta totam!
</div>
<div dssContainer shadow="md">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam aspernatur deserunt distinctio error eum hic id illo impedit incidunt ipsa, minima non perferendis perspiciatis quisquam rerum soluta totam!
</div>
<div dssContainer shadow="lg">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam aspernatur deserunt distinctio error eum hic id illo impedit incidunt ipsa, minima non perferendis perspiciatis quisquam rerum soluta totam!
</div>
```

###### `Inputs`
Name   | Type   | Default | Obs              |
------ | ------ | ------- | ---------------- |
shadow | string | -       | opções: md ou lg |

## Executar testes

```shell
npm run test
```
