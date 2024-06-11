import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { ROUTES_CHILDREN } from '../../../app.routes';
import { ItemInterface } from '../item-interface';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {

  public items: Array<ItemInterface> = [];

  public ngOnInit(): void {
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
