import { Component } from '@angular/core';

import { iconsList } from './icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  public icons: typeof iconsList.icons;

  public search = '';

  constructor() {
    this.icons = iconsList.icons;
  }

  public filter(): void {
    if (this.search.trim().length > 0) {
      this.icons = iconsList.icons.filter((item: any) => item.name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.icons = iconsList.icons;
    }
  }
}
