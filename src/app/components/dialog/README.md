<h1 align="center">Bem vindo ao @dss/components/dialog 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Dialog.

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
import { DssDialogModule } from '@dss/components/dialog';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    DssDialogModule,
    DssButtonModule,
  ],
})
export class DialogModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

  public open = false;

}
```

###### `template`

```html
<button dssButton (click)="open = true">Dialog</button>
<dss-dialog [open]="open">
  <dss-dialog-header>
    <div>Dialog Title</div>
  </dss-dialog-header>
  <dss-dialog-body>
    <p>So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever</p>
  </dss-dialog-body>
  <dss-dialog-footer>
    <button dssOutlineButton (click)="open = false">Cancelar</button>
    <button dssFilledButton>Continuar</button>
  </dss-dialog-footer>
</dss-dialog>
```

###### `Inputs`
| Name        | Type                       | Default         | Obs                                                                                                                                                                                                                                                    |
|-------------|----------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| open        | boolean                    | false           | -                                                                                                                                                                                                                                                      |
| labelledby  | string                     | -               | Id do elemento que contém um rótulo para o drawer                                                                                                                                                                                                      |
| describedby | string                     | -               | Id do elemento que descreve o drawer                                                                                                                                                                                                                   |
| autoFocus   | DssAutoFocusType ou string | first-focusable | Determina qual elemento será focalizado primeiro. O comportamento padrão é procurar um elemento para focalizar primeiro no body, depois no footer e por fim o botão de fechar do drawer. Informando um id válido é possível alterar o item focalizado  |

###### `Outputs`
| Name        | Type                        | Obs                      |
|-------------|-----------------------------|--------------------------|
| closeDialog | EventEmitter&lt;boolean&gt; | O valor que está em open |

###### `Structural Components`
| Name              | Type | Default | Obs |
|-------------------|------|---------|-----|
| dss-dialog-header | -    | -       | -   |
| dss-dialog-body   | -    | -       | -   |
| dss-dialog-footer | -    | -       | -   |

###### `Inputs - DssDialogHeader`
| Name | Type   | Default | Obs                          |
|------|--------|---------|------------------------------|
| id   | string | uuid    | Valor gerado automaticamente |

## Executar testes

```shell
npm run test
```
