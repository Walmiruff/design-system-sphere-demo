import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styles: [
    'button { margin-right: 16px; }',
  ],
})
export class DrawerDefaultComponent {

  public open1 = false;

  public open2 = false;

  public open3 = false;

  public paragraphs = new Array(50).fill(0);

  public closeSelf = true;
}
