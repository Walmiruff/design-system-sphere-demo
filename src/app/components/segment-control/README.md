<h1 align="center">Bem vindo ao @dss/components/segment-control 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.6.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Segment Control.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssSegmentControlModule } from '@dss/components/segment-control';
import { DssTypographyModule } from '@dss/components/typography';

import { SegmentControlComponent } from './segment-control.component';

@NgModule({
  declarations: [SegmentControlComponent],
  imports: [
    CommonModule,
    DssSegmentControlModule,
    DssTypographyModule,
  ],
})
export class SegmentControlModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-segment-control',
  templateUrl: './segment-control.component.html',
})
export class SegmentControlComponent {}
```

###### `template`

```html
<h2 dssTypography type="figure1">Segment Control</h2>
<br />
<br />
<h2 dssTypography type="h3">Default</h2>
<br />
<br />
<dss-segment-control>
  <dss-segment-control-item>
    <dss-segment-control-item-header>Item 1</dss-segment-control-item-header>
    <dss-segment-control-item-content>
      <h3>Título do conteúdo 1</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac felis et purus ultrices varius. Maecenas vel nisl ex. Integer a est
        placerat, pellentesque nisi ut, ullamcorper magna. Donec quis nunc quam. Mauris nec tellus malesuada, interdum lectus id, fringilla
        tortor. In gravida tellus lectus, at rhoncus eros mattis in. Cras vitae dolor porttitor, pharetra velit vel, sagittis turpis. Cras
        est justo, imperdiet quis elit ut, tempor convallis tellus. Proin vulputate at sapien eu feugiat. Pellentesque suscipit orci id
        tempor pharetra. Mauris ac justo tristique, varius nisi vitae, vestibulum nisi. Etiam in consectetur quam. Quisque facilisis
        bibendum faucibus. Phasellus a mauris accumsan, semper massa sed, consectetur massa. Fusce eget imperdiet ante.
      </p>
    </dss-segment-control-item-content>
  </dss-segment-control-item>
  <dss-segment-control-item [disabled]="true">
    <dss-segment-control-item-header>Item 2</dss-segment-control-item-header>
    <dss-segment-control-item-content>
      <h3>Título do conteúdo 2</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat molestiae odio sint? Aliquam, dignissimos ea est explicabo
        fugiat incidunt ipsum magnam mollitia natus quae, quam quod, ut voluptatem voluptates.
      </p>
    </dss-segment-control-item-content>
  </dss-segment-control-item>
  <dss-segment-control-item>
    <dss-segment-control-item-header>Item 3</dss-segment-control-item-header>
    <dss-segment-control-item-content>
      <h3>Título do conteúdo 3</h3>
      <br />
      <p>
        Nullam tempor gravida quam, a interdum mi lobortis euismod. Integer at nulla sed libero mattis maximus. Duis pretium turpis eu dolor
        egestas, non facilisis ex rhoncus.
      </p>
    </dss-segment-control-item-content>
  </dss-segment-control-item>
  <dss-segment-control-item>
    <dss-segment-control-item-header>Item 4</dss-segment-control-item-header>
    <dss-segment-control-item-content>
      <h3>Título do conteúdo 4</h3>
      <br />
      <p>
        Donec sodales nec turpis a porta. Sed urna odio, vulputate non tincidunt nec, porta vitae eros. Pellentesque laoreet urna ut mauris
        ultrices, non eleifend nisi tempus. Maecenas maximus ultricies sem, sit amet ullamcorper nibh malesuada eu. Fusce ut mi sapien.
        Donec porta enim nec tristique scelerisque.
      </p>
    </dss-segment-control-item-content>
  </dss-segment-control-item>
  <dss-segment-control-item>
    <dss-segment-control-item-header>Item 5</dss-segment-control-item-header>
    <dss-segment-control-item-content>
      <h3>Título do conteúdo 5</h3>
      <br />
      <p>
        Aenean faucibus consequat accumsan. Curabitur eu blandit eros. Ut sit amet ex at metus ullamcorper malesuada. Nulla bibendum
        sollicitudin rutrum. Sed dictum vitae ipsum nec ultrices. Fusce fringilla felis sed sapien mollis iaculis. Quisque venenatis, ipsum
        a cursus mattis, libero mi vestibulum sem, et feugiat justo massa quis lacus. Mauris non leo a libero varius efficitur. Ut tempor
        purus finibus venenatis viverra.
      </p>
    </dss-segment-control-item-content>
  </dss-segment-control-item>
</dss-segment-control>
```

###### `Inputs - SegmentControl`

| Name                 | Type   | Default | Obs                               |
| -------------------- | ------ | ------- | --------------------------------- |
| ariaLabel            | string | -       | Descrição sobre o segment-control |
| segmentControlActive | number | 0       | Index da guia ativa               |

###### `Inputs - SegmentControlItem`

| Name     | Type    | Default | Obs |
| -------- | ------- | ------- | --- |
| id       | string  | uuid    | -   |
| disabled | boolean | false   | -   |

###### `Outputs`

| Name                       | Type                       | Obs                           |
| -------------------------- | -------------------------- | ----------------------------- |
| selectedSegmentControl     | EventEmitter&lt;number&gt; | O index do item - @deprecated |
| segmentControlActiveChange | EventEmitter&lt;number&gt; | O index do item               |

###### `Structural Components`

| Name                             | Type | Default | Obs |
| -------------------------------- | ---- | ------- | --- |
| dss-segment-control-item         | -    | -       | -   |
| dss-segment-control-item-header  | -    | -       | -   |
| dss-segment-control-item-content | -    | -       | -   |

## Executar testes

```shell
npm run test
```
