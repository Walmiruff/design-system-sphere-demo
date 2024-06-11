import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DssIconNameType } from '@dss/components/icon';
import { DssTypographyColor } from '@dss/components/typography';

interface MenuInterface {
  title: string;
  icon?: {
    name: DssIconNameType;
    color?: DssTypographyColor;
  };
  disabled?: boolean;
  isBold?: boolean;
  description?: {
    value: string;
    highlight?: boolean;
  };
  submenu?: Array<MenuInterface>;
  link?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public expanded = false;

  public page = 'Home';

  public menu: Array<MenuInterface> = [
    { title: 'Home', icon: { name: 'home' } },
    { title: 'Extrato', icon: { name: 'account-dollar' }, disabled: true },
    {
      title: 'Transferência',
      icon: { name: 'change-account-associate-dollar' },
      submenu: [
        { title: 'Pix', description: { value: 'Forma simples de fazer transferência' } },
        {
          title: 'Doc / Ted',
          submenu: [
            { title: 'Doc - Transferência agendada' },
            { title: 'Ted - Transferência que cai na hora' },
          ],
        },
        { title: 'Agendamento' },
        { title: 'Comprovantes', description: { value: 'Imprima a 2ª via', highlight: true } },
        { title: 'Menu Completo', isBold: true },
      ],
    },
    {
      title: 'Pagamentos',
      icon: { name: 'barcode' },
      submenu: [{ title: 'Pague com Pix', description: { value: 'Nova forma de pagamento' } }],
    },
    { title: 'Cartões', icon: { name: 'card' } },
    { title: 'Investimentos', icon: { name: 'financial-indicator' }, link: 'investments' },
    { title: 'Empréstimos', icon: { name: 'credit' }, link: 'loans' },
    { title: 'Outros Serviços', icon: { name: 'more-in-a-circle' } },
  ];

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const parsePageName = {
          investments: 'Investimentos',
          loans: 'Empréstimos',
        };
        this.page = parsePageName[event.url.split('/').pop()] || 'Home';
      }
    });
  }

  public open(event: Event, item: string, link?: string): void {
    event.stopPropagation();

    this.page = item;

    if (this.page.includes('Doc -')) {
      this.expanded = false;
    }

    let currentLink = '/default/menu';
    if (link) {
      currentLink = `/default/menu/${link}`;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigate([currentLink]);
  }

  public goBack(): void {
    this.page = 'Home';
  }
}
