import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';


export const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'accordion',
        loadChildren: () => import('./accordion/accordion.module').then((m) => m.AccordionModule),
        data: { label: 'Accordion' },
      },
      {
        path: 'alert-banner',
        loadChildren: () => import('./alert-banner/alert-banner.module').then((m) => m.AlertBannerModule),
        data: { label: 'Alert Banner' },
      },
      {
        path: 'alert-toast',
        loadChildren: () => import('./alert-toast/alert-toast.module').then((m) => m.AlertToastModule),
        data: { label: 'Alert Toast' },
      },
      {
        path: 'avatar',
        loadChildren: () => import('./avatar/avatar.module').then((m) => m.AvatarModule),
        data: { label: 'Avatar' },
      },
      {
        path: 'background-status',
        loadChildren: () => import('./background-status/background-status.module').then((m) => m.BackgroundStatusModule),
        data: { label: 'Background Status' },
      },
      {
        path: 'badge',
        loadChildren: () => import('./badge/badge.module').then((m) => m.BadgeModule),
        data: { label: 'Badge' },
      },
      {
        path: 'breadcrumb',
        loadChildren: () => import('./breadcrumb/breadcrumb.module').then((m) => m.BreadcrumbModule),
        data: { label: 'Breadcrumb' },
      },
      {
        path: 'buttons',
        loadChildren: () => import('./button/button.module').then((m) => m.ButtonModule),
        data: { label: 'Buttons' },
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule),
        data: { label: 'Calendar' },
      },
      {
        path: 'cards',
        loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
        data: { label: 'Cards' },
      },
      {
        path: 'card-option',
        loadChildren: () => import('./card-option/card-option.module').then((m) => m.CardOptionModule),
        data: { label: 'Card Option (Option Select)' },
      },
      {
        path: 'carousel',
        loadChildren: () => import('./carousel/carousel.module').then((m) => m.CarouselModule),
        data: { label: 'Carousel' },
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
        data: { label: 'Chat' },
      },
      { path: '', redirectTo: 'accordion', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
