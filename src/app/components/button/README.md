<h1 align="center">Bem vindo ao @dss/components/button 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Button.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssButtonModule } from '@dss/components/button';
import { DssIconModule } from '@dss/components/icon';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    DssButtonModule,
    DssIconModule,
  ],
})
export class ButtonModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent { }
```

###### `template`

###### `Botão de Texto`

```html
<button dssButton>Text Button</button>
<a href="#" dssButton>Text Button</a>
```

###### `Botão Primário`

```html
<button dssFilledButton>Primary Button</button>
<button dssFilledButton [isSmall]="true">Primary Button Small</button>
<a href="#" dssFilledButton>Primary Button</a>
```

###### `Botão Secundário`

```html
<button dssOutlineButton>Secondary Button</button>
<button dssOutlineButton [isSmall]="true">Secondary Button Small</button>
<a href="#" dssOutlineButton>Secondary Button</a>
```

###### `Botão com Ícone`

```html
<button dssIconButton>
  <span dssIcon name="add-in-a-circle"></span>Icon Button
</button>
<a href="#" dssIconButton>
  <span dssIcon name="add-in-a-circle"></span>Icon Button
</a>
```

###### `Botão Fab`

```html
<button dssFabButton>
  <span dssIcon name="chat"></span>
</button>
<a href="#" dssFabButton>
  <span dssIcon name="chat"></span>
</a>
```

## WebView

> Em cenários onde a interface está sendo desenvolvida em Angular para ser usada em WebView
> o botão deve ter um comportamento diferente, ele precisa ocupar 100% do container onde está,
> para isto basta adicionar a classe `dss-webview` ao elemento.

###### `Botão em WebView`

```html
<button dssButton class="dss-webview">Text Button</button>
<a href="#" dssButton class="dss-webview">Text Button</a>
```

###### `Inputs - dssFabButton`
Name       | Type    | Default | Obs                                                         |
---------- | ------- | ------- | ----------------------------------------------------------- |
animateFab | boolean | true    | Serve para desabilitar a animação do Fab quando necessário. |


###### `Inputs - dssFilledButton / dssOutlineButton`
Name       | Type    | Default | Obs                                                         |
---------- | ------- | ------- | ----------------------------------------------------------- |
isSmall    | boolean | false   | Serve para ativar o estilo de botão pequeno.                |

## Executar testes

```shell
npm run test
```
