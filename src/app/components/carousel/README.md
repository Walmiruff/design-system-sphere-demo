<h1 align="center">Bem vindo ao @dss/components/carousel 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.9.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Carousel.

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
import { DssCarouselModule } from '@dss/components/carousel';
import { DssContainerModule } from '@dss/components/container';
import { DssIconModule } from '@dss/components/icon';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    DssButtonModule,
    DssCarouselModule,
    DssContainerModule,
    DssIconModule,
  ],
})
export class CarouselModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {

  public items = [
    {
      cards: [
        {
          icon: 'edit',
          title: 'Monte do seu jeito',
          description: 'Escolha os valores das coberturas para montar o seguro ideal',
          subtitle: 'Monte o seguro ideal para você',
          list: [
            'Personalize seu seguro',
            'Você defini o valor',
            'Escolha as suas coberturas',
            'Pacote de assistência ideal',
            'Defina suas parcelas',
            'Desconto à vista',
          ],
          button: 'Personalizar',
        },
        {
          icon: 'housing',
          title: 'Essencial',
          description: 'Por apenas',
          value: 19.9,
          subtitle: 'Coberturas inclusas:',
          list: [
            'Danos por fogo',
            'Roubo e furto qualificado',
            'Danos elétricos',
          ],
          button: 'Continuar',
        },
        {
          icon: 'financing',
          title: 'Mais',
          description: 'Por apenas',
          value: 29.9,
          subtitle: 'Coberturas inclusas:',
          list: [
            'Danos por fogo',
            'Roubo e furto qualificado',
            'Danos elétricos',
            'Quebra de vidros',
            'Danos por ventos',
            'Danos a terceiros e empregados',
          ],
          button: 'Continuar',
        },
      ],
    },
    {
      cards: [
        {
          icon: 'housing',
          title: 'Super',
          description: 'Por apenas',
          value: 49.9,
          subtitle: 'Coberturas inclusas:',
          list: [
            'Danos por fogo',
            'Roubo e furto qualificado',
            'Danos elétricos',
          ],
          button: 'Continuar',
        },
        {
          icon: 'financing',
          title: 'Premium',
          description: 'Por apenas',
          value: 99.9,
          subtitle: 'Coberturas inclusas:',
          list: [
            'Danos por fogo',
            'Roubo e furto qualificado',
            'Danos elétricos',
            'Quebra de vidros',
            'Danos por ventos',
            'Danos a terceiros e empregados',
          ],
          button: 'Continuar',
        },
      ],
    },
  ];

  public items2 = [
    {
      src: 'assets/img/carousel-1.png',
      alt: 'assets/img/carousel-1.png',
      title: 'Verde',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      src: 'assets/img/carousel-2.png',
      alt: 'assets/img/carousel-2.png',
      title: 'Azul',
      description: 'Eaque enim libero magnam modi quis sapiente temporibus?',
    },
    {
      src: 'assets/img/carousel-3.png',
      alt: 'assets/img/carousel-3.png',
      title: 'Verde Piscina',
      description: 'Accusamus aliquam at dolores eaque error obcaecati quo reprehenderit sunt tenetur',
    },
    {
      src: 'assets/img/carousel-4.png',
      alt: 'assets/img/carousel-4.png',
    },
    {
      src: 'assets/img/carousel-5.png',
      alt: 'assets/img/carousel-5.png',
      title: 'Amarelo',
    },
  ];
  
}
```

###### `template`

###### `Default`

```html
<dss-carousel>
  <dss-carousel-item *ngFor="let item of items2">
    <img dssCarouselItemImg [src]="item.src" [alt]="item.alt">
    <dss-carousel-item-title *ngIf="item?.title">{{ item.title }}</dss-carousel-item-title>
    <dss-carousel-item-description *ngIf="item?.description">{{ item.description }}</dss-carousel-item-description>
  </dss-carousel-item>
</dss-carousel>
```

###### `template`

###### `Navegação lateral`

```html
<dss-carousel class="dss-carousel--side-nav">
  <dss-carousel-item *ngFor="let item of items2">
    <img dssCarouselItemImg [src]="item.src" [alt]="item.alt">
    <dss-carousel-item-title *ngIf="item?.title">{{ item.title }}</dss-carousel-item-title>
    <dss-carousel-item-description *ngIf="item?.description">{{ item.description }}</dss-carousel-item-description>
  </dss-carousel-item>
</dss-carousel>
```

>Ao utlizar a classe "dss-carousel--side-nav" os botões de navegação mudam da posição inferior para lateral e esconde a indicação de posição ativa

###### `template`

###### `Com HTML`

```html
<dss-carousel [circular]="true">
  <dss-carousel-item *ngFor="let item of items">
    <div class="dss-grid">
      <div class="dss-col-4" *ngFor="let card of item.cards">
        <div dssContainer shadow="md" class="dss-p-1 dss-position-relative" style="height: 550px;">
          <div class="dss-display-flex dss-align-items-center dss-mb-1">
            <span dssIcon [name]="card.icon"></span>
            <h1 dssTypography type="h1" class="dss-ml-0.5">{{ card.title }}</h1>
          </div>
          <p dssTypography type="caption" class="dss-mb-1">{{ card.description }}</p>
          <p *ngIf="card?.value" dssTypography type="h1" class="dss-mb-1"><strong>{{ card.value | currency:'BRL':'symbol':'2.2-2' }}</strong> /mês</p>
          <div *ngIf="!card?.value" style="height: 32px;"></div>
          <h3 dssTypography type="h3" class="dss-mb-1" [bold]="true">{{ card.subtitle }}</h3>
          <ul style="list-style: none;">
            <li class="dss-display-flex dss-align-items-center dss-mb-1" *ngFor="let value of card.list">
              <span dssIcon name="checkmark"></span>
              <span dssTypography type="body">{{ value }}</span>
            </li>
          </ul>
          <button dssFilledButton class="dss-position-absolute" style="bottom: 16px; width: calc(100% - 32px);">{{ card.button }}</button>
        </div>
      </div>
    </div>
  </dss-carousel-item>
</dss-carousel>
```

###### `template`

###### `Sem Limite de Altura`

```html
<dss-carousel class="dss-carousel--no-height-limit">
  <dss-carousel-item>
    <img dssCarouselItemImg [src]="item.src" [alt]="item.alt">
  </dss-carousel-item>
</dss-carousel>
```
>Ao utlizar a classe "dss-carousel--no-height-limit" o banner manterá a altura original da imagem.

###### `Com Animação de Slide (Touch no mobile)`

```html
<dss-carousel [animate]="{ animation: 'slide' }">
  <dss-carousel-item *ngFor="let item of items2">
    <img dssCarouselItemImg [src]="item.src" [alt]="item.alt">
    <dss-carousel-item-title *ngIf="item?.title">{{ item.title }}</dss-carousel-item-title>
    <dss-carousel-item-description *ngIf="item?.description">{{ item.description }}</dss-carousel-item-description>
  </dss-carousel-item>
</dss-carousel>
```
>Passar o parâmetro `slide` para configurar o carousel para ativar o slide. Esta configuração pode ser feita tanto no componente como no módulo do carousel.



###### `Inputs`
Name             | Type    | Default | Obs |
---------------- | ------- | ------- | --- |
activeItem       | number  | 0       | -   |
circular         | boolean | false   | -   |

###### `Outputs`
Name            | Type                       | Obs |
--------------- | -------------------------- | --- |
selectionChange | EventEmitter&lt;number&gt; | -   |

###### `Structural Components`
Name                          | Type | Default  | Obs |
----------------------------- | ---- | -------- | --- |
dss-carousel-item             | -    | -        | -   |
dss-carousel-item-title       | -    | -        | -   |
dss-carousel-item-description | -    | -        | -   |

###### `Structural Directive`
Name                  | Type | Default  | Obs |
--------------------- | ---- | -------- | --- |
dss-carousel-item-img | -    | -        | -   |

## Configuração no Módulo

```ts
import { DssCarouselModule } from '@dss/components/carousel';

const dssCarouselConfig = {
  animation: 'slide'
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    DssCarouselModule.forRoot(dssCarouselConfig),
  ],
  exports: [...],
})
export class CarouselModule { }
```

## Executar testes

```shell
npm run test
```
