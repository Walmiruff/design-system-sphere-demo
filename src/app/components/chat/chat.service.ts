import { Injectable } from '@angular/core';

import {
  DssChatAddItem,
  DssEventComponent,
  DssMessageComponent,
  DssQuickReplyGroupComponent,
} from '@dss/components/chat';

@Injectable()
export class ChatService {
  // tslint:disable-next-line:max-func-body-length
  public getMessages(): Array<any> {
    return [
      new DssChatAddItem(
        DssEventComponent,
        {
          iconName: 'account-people',
          content: 'Event padrao',
        },
      ),
      new DssChatAddItem(
        DssEventComponent,
        {
          type: 'default',
          iconColor: 'info',
          iconName: 'circle-information-filled',
          content: 'Event de informação',
        },
      ),
      new DssChatAddItem(
        DssEventComponent,
        {
          type: 'alert',
          iconColor: 'warning',
          iconName: 'circle-attention-filled',
          content: 'Event de <b>atenção</b> com HTML',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          nameAndHourAttendant: 'Deadpool - 16:20',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          isSameMinute: true,
          content: 'Dolorem esse omnis rem repellat rerum, sunt vitae?',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          isSameMinute: true,
          content: 'Aliquid animi culpa distinctio id labore laboriosam nisi non perferendis quo quos repellendus, sequi',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          isSameMinute: true,
          content: '?',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          sent: false,
          nameAndHourUser: 'Wolverine - 16:21',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem esse omnis rem repellat rerum, sunt vitae? Aliquid animi culpa distinctio id labore laboriosam nisi non perferendis quo quos repellendus, sequi?',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          iconColor: 'warning',
          iconName: 'circle-attention-filled',
          nameAndHourAttendant: 'Deadpool - 16:22',
          content: 'Ícone de alerta',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          nameAndHourUser: 'Wolverine - 16:25',
          content: '<div class="dss-display-flex dss-align-items-center"><span class="dss-icon-document-pdf"></span>&nbsp;&nbsp;documento.pdf</div><div class="dss-ml-2" style="font-size: 14px;">30mb</div>',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          iconColor: 'warning',
          iconName: 'circle-information-filled',
          nameAndHourAttendant: 'Deadpool - 16:26',
          content: 'Ícone de informação',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          iconName: 'factoring',
          nameAndHourAttendant: 'Deadpool - 16:28',
          content: 'Outro ícone',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          type: 'not-available',
          iconColor: 'warning',
          iconName: 'circle-attention-filled',
          content: 'Mensagem não disponível',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          type: 'loading',
          nameAndHourAttendant: 'Deadpool - 16:32',
          content: 'Essa mensagem aparece depois de um tempo, antes vai aparecer o loading',
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          type: 'options',
          options: ['Sugestão 1', 'Sugestão 2', 'Sugestão 3', 'Sugestão 4', 'Sugestão 5'],
        },
      ),
      new DssChatAddItem(
        DssMessageComponent,
        {
          avatar: {
            name: 'santander',
            type: 'default',
          },
          nameAndHourAttendant: 'Deadpool - 16:40',
          content: 'Escola uma das opções',
        },
      ),
      new DssChatAddItem(
        DssQuickReplyGroupComponent,
        {
          name: 'exemplo-do-quick-reply',
          options: [
            { value: 1, content: 'Abrir conta' },
            { value: 2, content: 'Auxílio emergencial' },
            { value: 3, content: 'Verificar limite' },
            { value: 4, content: 'Contratar seguros' },
            { value: 5, content: 'Financiamento' },
            { value: 6, content: 'Empréstimos' },
          ],
        },
      ),
      new DssChatAddItem(
        DssQuickReplyGroupComponent,
        {
          onlyOne: false,
          name: 'exemplo-do-quick-reply-only-one-false',
          options: [
            { value: 1, content: 'Abrir conta' },
            { value: 2, content: 'Auxílio emergencial' },
            { value: 3, content: 'Verificar limite' },
            { value: 4, content: 'Contratar seguros' },
            { value: 5, content: 'Financiamento' },
            { value: 6, content: 'Empréstimos' },
          ],
        },
      ),
    ];
  }
}
