import { Component } from '@angular/core';

import { DssBreadcrumbInterface } from '@dss/components/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {

  public items: Array<DssBreadcrumbInterface> = [
    { label: 'Link A', url: '#' },
    { label: 'Link B', url: '#' },
    { label: 'Link C', url: '#' },
    { label: 'Link D', url: '#' },
    { label: 'Link E', url: '#', title: 'Título do link E' },
  ];

}
