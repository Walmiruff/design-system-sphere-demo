import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public count = 0;

  public addCount(event?: MouseEvent): void {
    if (event !== undefined && (event.target as HTMLAnchorElement).tabIndex !== -1) {
      this.count += 1;
    } else if (event === undefined) {
      this.count += 1;
    }

    if (event) {
      event.preventDefault();
    }
  }
}
