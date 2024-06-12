<h1 align="center">Bem vindo ao @dss/components/slider 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Slider.

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

import { DssSliderModule } from '@dss/components/slider';

import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssSliderModule,
  ],
})
export class SliderModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent {

  public slider = 10;

  public sliderRange = [0, 0];
  
  public sliderInput = 50;
}
```

###### `template`

###### `Padrão`

```html
<dss-slider [(ngModel)]="slider">
  <dss-slider-label>Escala</dss-slider-label>
  <dss-slider-value>{{ slider }}</dss-slider-value>
  <dss-slider-min>0</dss-slider-min>
  <dss-slider-max>100</dss-slider-max>
</dss-slider>
```

###### `Range`

```html
<dss-slider [(ngModel)]="sliderRange" [range]="true">
  <dss-slider-label>Escala</dss-slider-label>
  <dss-slider-value>de {{ sliderRange[0] }} à {{ sliderRange[1] }}</dss-slider-value>
  <dss-slider-min>0</dss-slider-min>
  <dss-slider-max>100</dss-slider-max>
</dss-slider>
```

###### `Com Input`

```html
<dss-slider [(ngModel)]="sliderInput">
  <dss-slider-label>Escala</dss-slider-label>
  <dss-slider-value>{{ sliderInput }}</dss-slider-value>
  <dss-slider-min>0</dss-slider-min>
  <dss-slider-max>100</dss-slider-max>
  <input dssSliderInput type="text" inputmode="numeric" [(ngModel)]="sliderInput">
</dss-slider>
```

###### `Inputs`
Name     | Type                | Default | Obs |
-------- | ------------------- | ------- | --- |
value    | number              | 0       | -   |
values   | Array&lt;number&gt; | [0, 0]  | -   |
disabled | boolean             | false   | -   |
min      | number              | 0       | -   |
max      | number              | 100     | -   |
step     | number              | 1       | -   |
range    | boolean             | false   | -   |
tabIndex | string              | '0'     | -   |

###### `Output`
Name         | Type                                                                | Default | Obs |
------------ | ------------------------------------------------------------------- | ------- | --- |
changeSlider | EventEmitter&lt;number&gt;, EventEmitter&lt;Array&lt;number&gt;&gt; | -       | -   |
sliderEnd    | EventEmitter&lt;number&gt;, EventEmitter&lt;Array&lt;number&gt;&gt; | -       | -   |

###### `Directives`
Name           | Type | Default  | Obs                                      |
-------------- | ---- | -------- | ---------------------------------------- |
dssSliderInput | -    | -        | Diretiva para ser usada com a tag input. |

###### `Structural Components`
Name             | Type | Default  | Obs |
---------------- | ---- | -------- | --- |
dss-slider-label | -    | -        | -   |
dss-slider-value | -    | -        | -   |
dss-slider-min   | -    | -        | -   |
dss-slider-max   | -    | -        | -   |

## Executar testes

```shell
npm run test
```
