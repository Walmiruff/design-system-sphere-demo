import { Component, ComponentRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { first } from 'rxjs/operators';

import {
  DssChatAddItem,
  DssChatContainerBodyComponent,
  DssMessageComponent,
  DssQuickReplyGroupComponent,
} from '@dss/components/chat';

import { ItemInterface } from '../home/item-interface';
import { ROUTES_CHILDREN } from './chat.routes';
import { ChatService } from './chat.service';

@Component({
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnDestroy, OnInit {

  public items: Array<ItemInterface> = [];

  public openChat = false;

  public input = '';

  public selectedOptionMessage: number;

  public selectedOptionQuickReply: string | number;

  public components: Array<DssChatAddItem> = [];

  public generatedComponentes: Array<ComponentRef<any>> = [];

  public counter = interval(1000);

  public loadingMessages: boolean = true;

  @ViewChild(DssChatContainerBodyComponent, { static: true }) public dssChatContainerBody: DssChatContainerBodyComponent;

  private _subscription: Subscription;

  private _hour: string;

  constructor(private _service: ChatService) { }

  public ngOnInit(): void {
    // Ordenar os links
    this.sortLinks();

    // Serviço para buscar as mensagens
    this.components = this._service.getMessages();
  }

  public ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public initChat(): void {
    if (!this.openChat) {
      this.openChat = true;
      this.loadingMessages = true;

      // Adiciona as mensagens
      this._subscription = this.counter.subscribe((value: number) => {
        if (value < this.components.length) {
          const component = this.dssChatContainerBody.loadComponent(this.components[value]);
          this.generatedComponentes.push(component);

          this.setMessageRead(component);
          this.removeLoading(component);
          this.listenerOptions(component);

          if (component.instance.isSameMinute) {
            this.setSameMinute(component, this.generatedComponentes.length - 1);
          }
        } else {
          this.loadingMessages = false;
          this._subscription.unsubscribe();
        }
      });
    }
  }

  public closeChat(): void {
    this.openChat = false;
    this.dssChatContainerBody.clearChat();
    this.generatedComponentes = [];
    this._subscription.unsubscribe();
    this._subscription = null;
  }

  public send(): void {
    let data;
    const hour = (new Date()).toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' });

    if (this._hour === hour) {
      data = {
        sent: true,
        isSameMinute: true,
        isUser: true,
        content: this.input,
      };

      this.setSameMinute(this.generatedComponentes[this.generatedComponentes.length - 1], this.generatedComponentes.length);
    } else {
      data = {
        sent: true,
        nameAndHourUser: `Cisne Negro - ${hour}`,
        content: this.input,
      };
    }

    this._hour = hour;

    const message = new DssChatAddItem(DssMessageComponent, data);
    const component = this.dssChatContainerBody.loadComponent(message);

    this.generatedComponentes.push(component);
  }

  private setMessageRead(component: ComponentRef<any>): void {
    if ('nameAndHourUser' in component.instance.data) {
      timer(2000)
        .pipe(first())
        .subscribe(() => component.instance.sent = true);
    }
  }

  private setSameMinute(component: ComponentRef<any>, index: number): void {
    if ('isSameMinute' in component.instance && index >= 1) {
      if (!this.generatedComponentes[index - 1].instance.isSameMinute) {
        this.generatedComponentes[index - 1].instance.isSameMinute = true;
      }
    }
  }

  private removeLoading(component: ComponentRef<any>): void {
    if ('type' in component.instance.data && component.instance.data.type === 'loading') {
      timer(1000)
        .pipe(first())
        .subscribe(() => component.instance.type = undefined);
    }
  }

  private listenerOptions(component: ComponentRef<any>): void {
    // Options de DssMessageComponent
    if ('type' in component.instance.data && 'options' in component.instance.data) {
      component.instance.clickOption.subscribe((index: number) => {
        this.selectedOptionMessage = index;
        component.destroy();
      });

    // Options do DssQuickReplyGroupComponent
    } else if ('name' in component.instance.data && 'options' in component.instance.data) {
      component.instance.quickReplyGroupChange.subscribe((option: { source: DssQuickReplyGroupComponent; value: string | number }) => {
        this.selectedOptionQuickReply = option.value;
      });
    }
  }

  private sortLinks(): void {
    this.items = ROUTES_CHILDREN
      .map((route: Route) => ({
        link: route.path,
        label: route.data.label,
        pending: route.data.pending,
      }))
      .sort((a: ItemInterface, b: ItemInterface) => {
        if (a.label.toLowerCase() < b.label.toLowerCase()) {
          return -1;
        }

        if (a.label.toLowerCase() > b.label.toLowerCase()) {
          return 1;
        }

        return 0;
      });
  }

}
