import { Routes } from '@angular/router';

const ROUTES_CHILDREN: Routes = [
  {
    path: 'event',
    loadChildren: () => import('./event/event.module')
      .then((m) => m.EventModule),
    data: { label: 'Event' },
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module')
      .then((m) => m.MessageModule),
    data: { label: 'Message' },
  },
  {
    path: 'quick-reply',
    loadChildren: () => import('./quick-reply/quick-reply.module')
      .then((m) => m.QuickReplyModule),
    data: { label: 'Quick Reply' },
  },
  {
    path: 'chat-container',
    loadChildren: () => import('./chat-container/chat-container.module')
      .then((m) => m.ChatContainerModule),
    data: { label: 'Chat Container' },
  },
];

export {
  ROUTES_CHILDREN,
};
