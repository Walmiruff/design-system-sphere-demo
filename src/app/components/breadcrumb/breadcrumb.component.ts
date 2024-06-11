import { Component } from '@angular/core';

import { DssBreadcrumbInterface } from '@dss/components/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {

  public items: Array<DssBreadcrumbInterface> = [
    { label: 'Link A', url: '/components/breadcrumb' },
    { label: 'Link B', url: '/components/breadcrumb' },
    { label: 'Link C', url: '/components/breadcrumb' },
    { label: 'Link D', url: '/components/breadcrumb' },
    { label: 'Link E', url: '/components/breadcrumb', title: 'Título do link E' },
  ];

}
