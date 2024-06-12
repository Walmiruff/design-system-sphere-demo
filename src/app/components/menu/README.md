<h1 align="center">Bem vindo ao @dss/components/menu 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.19.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Menu.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssIconModule } from '@dss/components/icon';
import { DssMenuModule } from '@dss/components/menu';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    DssIconModule,
    DssMenuModule,
  ],
})
export class MenuModule {}
```

###### `component`

```ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public expanded = false;

  constructor(private router: Router) {}

  public open(item: string): void {
    this.router.navigate([`/${item}`]);
  }
}
```

###### `css`

```css
.layout {
  background-color: #f0f2f5;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 24px; /* 32px (body) + 24px = 56px altura do header */
  width: 100%;
}

.header {
  background-color: #cc0000;
  display: block;
  height: 56px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

@media (min-width: 768px) {
  .layout {
    padding-top: 56px; /* 32px (body) + 48px = 80px altura do header */
  }

  .header {
    height: 80px;
  }
}
```

> Este CSS ajudar a compor o layout necessário para o menu.

###### `template`

```html
<div class="layout">
  <dss-menu [expanded]="expanded">
    <dss-menu-item (click)="open('saldo')">
      <span dssIcon name="bag-of-money-dollar"></span>
      <dss-menu-item-title>Saldo</dss-menu-item-title>
      <dss-menu-item-description>Consulte seu extrato</dss-menu-item-description>
      <dss-submenu>
        <span dssIcon name="bag-of-money-dollar"></span>
        <dss-submenu-title>Saldo</dss-submenu-title>
        <dss-menu-item (click)="open('extrato')">
          <span dssIcon name="receipt-bills"></span>
          <dss-menu-item-title>Extrato</dss-menu-item-title>
          <dss-menu-item-description>Extrato detalhado</dss-menu-item-description>
        </dss-menu-item>
        <dss-menu-item (click)="open('lançamentos futuros')">
          <span dssIcon name="book"></span>
          <dss-menu-item-title>Lançamentos Futuros</dss-menu-item-title>
        </dss-menu-item>
        <dss-menu-item (click)="open('menu completo')">
          <dss-menu-item-title [isBold]="true">Menu Completo</dss-menu-item-title>
        </dss-menu-item>
      </dss-submenu>
    </dss-menu-item>
    <dss-menu-item (click)="open('pagamento')">
      <span dssIcon name="payment-dollar"></span>
      <dss-menu-item-title>Pagamento</dss-menu-item-title>
      <dss-menu-item-description>Faça seus pagamentos por aqui</dss-menu-item-description>
    </dss-menu-item>
    <dss-menu-item (click)="open('investimento')">
      <span dssIcon name="analysis"></span>
      <dss-menu-item-title>Investimentos</dss-menu-item-title>
      <dss-menu-item-description>Faça seus investimentos por aqui</dss-menu-item-description>
    </dss-menu-item>
    <dss-menu-item (click)="open('empresas')">
      <span dssIcon name="business-store"></span>
      <dss-menu-item-title>Empresas</dss-menu-item-title>
      <dss-menu-item-description>Obtenha dicas para seus negócios</dss-menu-item-description>
    </dss-menu-item>
    <dss-menu-item (click)="open('atendimento')">
      <span dssIcon name="at"></span>
      <dss-menu-item-title>Atendimento</dss-menu-item-title>
    </dss-menu-item>
    <dss-menu-item (click)="expanded = !expanded" [toggleMenu]="true"
      ><!-- Menu item with toggleMenu is optional -->
      <span dssIcon [name]="expanded ? 'arrow-left' : 'arrow-right'"></span>
    </dss-menu-item>
  </dss-menu>
  <header class="header"></header>
  <main>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, dolore in sapiente sint sunt vero? Amet autem culpa
      deleniti dolorem ducimus error explicabo, ipsa minus possimus quidem rem, tempore!
    </p>
    <br />
    <p>
      Asperiores enim explicabo fuga mollitia reiciendis rerum sed, similique. A at cum dignissimos minima odio officia voluptas voluptate.
      Ab aperiam earum error expedita possimus ut voluptatibus? Ea ex in quos?
    </p>
    <br />
    <p>
      Adipisci aliquam beatae, dolore eveniet odit repellendus reprehenderit sapiente sunt unde voluptatibus! Alias animi dolore dolorem
      doloremque eaque eos error harum iure labore magni nulla porro, quasi recusandae similique sunt!
    </p>
    <br />
    <p>
      Aliquid atque beatae cumque eaque esse explicabo fugiat illum ipsam, laboriosam laborum molestiae molestias neque nesciunt nobis quasi
      quo recusandae sapiente sequi sint tempore temporibus tenetur voluptatibus. Dignissimos, eaque voluptatem.
    </p>
    <br />
    <p>
      Culpa eligendi exercitationem placeat ratione! Accusamus, adipisci at eaque eligendi enim error labore magnam minima nam nemo nobis,
      odit quae quaerat quia quidem quod reprehenderit. Animi doloremque fuga in obcaecati.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque delectus fugiat incidunt iusto labore quia. Ab at doloremque
      hic perferendis quia! Asperiores dolore eaque facilis fuga hic magnam similique.
    </p>
    <br />
    <p>
      Ab accusantium adipisci aliquid aspernatur at atque dignissimos, dolor doloremque facere ipsa iusto minus modi nam neque nesciunt
      nihil nobis nulla, pariatur perferendis quae quis saepe veniam vero voluptas voluptate?
    </p>
    <br />
    <p>
      Assumenda cumque, cupiditate deserunt distinctio, labore laboriosam laborum magni nam nobis pariatur perferendis quam quas quis quos
      saepe temporibus tenetur totam. Amet blanditiis doloribus eaque impedit, labore odio unde vitae!
    </p>
    <br />
    <p>
      A accusamus asperiores assumenda consequuntur, deserunt dignissimos dolore eveniet excepturi libero magnam, maiores minima mollitia
      natus necessitatibus obcaecati perferendis quod quos rerum saepe sequi tempora tempore tenetur veritatis voluptate voluptates.
    </p>
    <br />
    <p>
      Aperiam assumenda doloremque eligendi explicabo fuga hic impedit ipsa, maxime necessitatibus nemo nisi obcaecati omnis possimus quos,
      reprehenderit similique, vel! Ad beatae dolorum et iure nam quas quia repellendus tempora?
    </p>
  </main>
</div>
```

###### `Inputs - Menu`

| Name     | Type    | Default | Obs |
| -------- | ------- | ------- | --- |
| expanded | boolean | false   | -   |

###### `Inputs - Menu Item`

| Name       | Type    | Default | Obs |
| ---------- | ------- | ------- | --- |
| selected   | boolean | false   | -   |
| disabled   | boolean | false   | -   |
| toggleMenu | boolean | false   | -   |

###### `Inputs - Menu Item Title`

| Name      | Type    | Default | Obs |
| --------- | ------- | ------- | --- |
| fullTitle | string  | -       | -   |
| isBold    | boolean | false   | -   |

###### `Inputs - Menu Item Description`

| Name      | Type    | Default | Obs |
| --------- | ------- | ------- | --- |
| highlight | boolean | false   | -   |

###### `Structural Components`

| Name                      | Type | Default | Obs |
| ------------------------- | ---- | ------- | --- |
| dss-menu-item             | -    | -       | -   |
| dss-menu-item-title       | -    | -       | -   |
| dss-menu-item-description | -    | -       | -   |
| dss-submenu               | -    | -       | -   |
| dss-submenu-title         | -    | -       | -   |

## Executar testes

```shell
npm run test
```
