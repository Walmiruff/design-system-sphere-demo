<h1 align="center">Bem vindo ao @dss/components/tooltip 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.10.0-blue.svg?cacheSeconds=2592000" />
</p>

> Diretiva Tooltip.

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

import { DssButtonModule } from '@dss/components/button';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssTooltipModule } from '@dss/components/tooltip';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssTooltipModule,
    DssButtonModule,
    DssFormFieldModule,
  ],
})
export class TooltipModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  public input = '';

  public addCode(event: Event, value: string): void {
    event.preventDefault();
    this.input = value;
  }
}
```

###### `template`

###### `Default`

```html
<button dssOutlineButton dssTooltip="Tooltip right" tooltipPosition="right">Right</button>
<button dssOutlineButton dssTooltip="Tooltip left" tooltipPosition="left">Left</button>
<button dssOutlineButton dssTooltip="Tooltip top" tooltipPosition="top">Top</button>
<button dssOutlineButton dssTooltip="Tooltip bottom" tooltipPosition="bottom">Bottom</button>
```

###### `Light`

```html
<button dssFilledButton dssTooltip="Tooltip right" tooltipStyle="light" tooltipPosition="right">Right</button>
<button dssFilledButton dssTooltip="Tooltip left" tooltipPosition="left" tooltipStyle="light">Left</button>
<button dssFilledButton dssTooltip="Tooltip top" tooltipPosition="top" tooltipStyle="light">Top</button>
<button dssFilledButton dssTooltip="Tooltip bottom" tooltipPosition="bottom" tooltipStyle="light">Bottom</button>
```

###### `Input`

```html
<dss-form-field>
  <input type="text" [(ngModel)]="input" dssTooltip="Digite alguma coisa..." tooltipPosition="right" />
  <label dssLabel style="pointer-events: none;">Input com tooltip</label>
  <span dssHint>Passe o mouse para uma dica</span>
</dss-form-field>
```

###### `Input & Focus`

```html
<dss-form-field>
  <input type="text" [(ngModel)]="input" dssTooltip="Digite alguma coisa..." tooltipEvent="focus" tooltipPosition="right" />
  <label dssLabel>Input com tooltip</label>
  <span dssHint>Acesse o input para uma dica</span>
</dss-form-field>
```

###### `Com HTML`

```html
<dss-form-field>
  <input
    type="text"
    [(ngModel)]="input"
    dssTooltip="Clique <a href='#' style='color: #fff;'>aqui</a> para colar o código."
    tooltipPosition="topLeft"
    [tooltipHtml]="true"
    (tooltipHtmlClick)="addCode($event, 'Sphere')"
  />
  <label dssLabel style="pointer-events: none;">Input com tooltip</label>
</dss-form-field>
```

> Quando o `dssTooltip` for usado com HTML e `tooltipHtml = true` ele não sumirá quando o elemento host peder o hover ou o focus.
> Isso acontece para que o usuário possa acessar o conteúdo HTML, por exemplo, o clique de uma tag _a_.
> Se você quiser passar algum HTML que não precise de uma ação do usuário, então `tooltipHtml` deve permanecer false, que inclusice é o valor padrão.

###### `Inputs`

| Name            | Type    | Default | Obs                                                                                                                         |
| --------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| dssTooltip      | string  | -       | -                                                                                                                           |
| tooltipPosition | string  | right   | opções: top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop ou rightBottom. |
| tooltipEvent    | string  | hover   | opções: hover ou focus.                                                                                                     |
| tooltipStyle    | string  | dark    | opções: dark ou light.                                                                                                      |
| tooltipDisabled | boolean | false   | -                                                                                                                           |
| tooltipHtml     | boolean | false   | -                                                                                                                           |

###### `Event`

| Name             | Type                      | Default | Obs                                                   |
| ---------------- | ------------------------- | ------- | ----------------------------------------------------- |
| tooltipHtmlClick | EventEmitter&lt;Event&gt; | -       | Evento emitido quando tooltipHtml tiver o valor true. |

## Executar testes

```shell
npm run test
```
