import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';


const routes: Routes = [
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
      { path: '', redirectTo: 'accordion', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
