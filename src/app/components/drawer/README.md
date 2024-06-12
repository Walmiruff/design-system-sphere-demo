<h1 align="center">Bem vindo ao @dss/components/drawer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.3.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Drawer.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DssDrawerModule } from '@dss/components/drawer';

import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [
    DrawerComponent,
  ],
  imports: [
    CommonModule,
    DssDrawerModule,
  ],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {

  public open = false;

}
```

###### `template`

```html
<button (click)="open = true">Abrir Drawer</button>
<dss-drawer [open]="open" (closeDrawer)="open = $event">
  <dss-drawer-header>Drawer Title</dss-drawer-header> <!-- Optional -->
  <dss-drawer-body>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis culpa cumque delectus dolorum, eius et magnam minus, optio quaerat reiciendis repellendus rerum sunt suscipit unde vel vitae voluptas voluptatibus!</p>
  </dss-drawer-body>
  <dss-drawer-footer> <!-- Optional -->
    <button>Cancelar</button>
    <button>Prosseguir</button>
  </dss-drawer-footer>
</dss-drawer>
```

###### `Inputs`
| Name        | Type                       | Default         | Obs                                                                                                                                                                                                                                                   |
|-------------|----------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| aside       | boolean                    | false           | -                                                                                                                                                                                                                                                     |
| open        | boolean                    | false           | -                                                                                                                                                                                                                                                     |
| closeSelf   | boolean                    | true            | Propriedade para prevenir o fechamento ao clicar fora da área do componente. O comportamento padrão é fechar.                                                                                                                                         |
| labelledby  | string                     | -               | Id do elemento que contém um rótulo para o drawer                                                                                                                                                                                                     |
| describedby | string                     | -               | Id do elemento que descreve o drawer                                                                                                                                                                                                                  |
| autoFocus   | DssAutoFocusType ou string | first-focusable | Determina qual elemento será focalizado primeiro. O comportamento padrão é procurar um elemento para focalizar primeiro no body, depois no footer e por fim o botão de fechar do drawer. Informando um id válido é possível alterar o item focalizado |

###### `Outputs`
| Name        | Type                        | Obs                      |
|-------------|-----------------------------|--------------------------|
| closeDrawer | EventEmitter&lt;boolean&gt; | O valor que está em open |

###### `Structural Components`
| Name              | Type | Default | Obs |
|-------------------|------|---------|-----|
| dss-drawer-header | -    | -       | -   |
| dss-drawer-body   | -    | -       | -   |
| dss-drawer-footer | -    | -       | -   |

###### `Inputs - DssDrawerHeader`
| Name | Type   | Default | Obs                          |
|------|--------|---------|------------------------------|
| id   | string | uuid    | Valor gerado automaticamente |

## Executar testes

```shell
npm run test
```
