import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
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

  public lastItem = false;

  public onClickLastItem(): void {
    alert('Last item has clicked!');
  }
}
