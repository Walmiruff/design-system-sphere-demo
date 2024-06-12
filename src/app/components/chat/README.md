<h1 align="center">Bem vindo ao @dss/components/chat 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.26.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Chat.

## Instalação

```sh
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DssChatModule } from '@dss/components/chat';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssButtonModule } from '@dss/components/button';

import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    DssChatModule,
    DssFormFieldModule,
    DssButtonModule,
  ],
  exports: [ChatComponent],
})
export class ChatModule { }

```

###### `component`

```ts
import { Component, ComponentRef, ViewChild } from '@angular/core';

import { DssChatAddItem, DssChatContainerBodyComponent, DssMessageComponent } from '@dss/components/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {

  @ViewChild(DssChatContainerBodyComponent, { static: true }) public dssChatContainerBody: DssChatContainerBodyComponent;

  public generatedComponentes: Array<ComponentRef<any>> = [];

  public openChat = false;

  public input = '';

  public initChat(): void {
    this.openChat = !this.openChat;
  }

  public closeChat(): void {
    this.openChat = false;
  }

  public send(): void {
    const hour = (new Date()).toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' });

    const message = new DssChatAddItem(DssMessageComponent, {
      sent: true,
      nameAndHourUser: `Cisne Negro - ${hour}`,
      content: this.input,
    });
    const component = this.dssChatContainerBody.loadComponent(message);

    this.generatedComponentes.push(component);
  }

}
```

###### `template`

```html
<dss-chat [open]="openChat" (closeChat)="closeChat()">
  <dss-chat-container>
    <dss-chat-container-header>Título do Chat</dss-chat-container-header>
    <dss-chat-container-body></dss-chat-container-body>
    <dss-chat-container-footer (clickSend)="send()">
      <dss-form-field>
        <input dssChatTextarea type="text" [(ngModel)]="input" aria-label="chat">
      </dss-form-field>
    </dss-chat-container-footer>
  </dss-chat-container>
</dss-chat>
<button dssFabButton (click)="initChat()" class="js-button" style="bottom: 24px; position: fixed; right: 24px; z-index: 1000;">
  <span dssIcon name="chat"></span>
</button>
```

###### `Inputs`
| Name           | Type    | Default                | Obs                              |
|----------------|---------|------------------------|----------------------------------|
| open           | boolean | false                  | Serve para abrir e fechar o chat |

###### `Outputs`
| Name      | Type                     | Obs                             |
|-----------|--------------------------|---------------------------------|
| closeChat | EventEmitter&lt;void&gt; | Emitido quando o chat é fechado |

## Executar testes

```sh
npm run test
```
