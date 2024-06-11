import { Component } from '@angular/core';

import { DssCardType } from '@dss/components/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  public type: DssCardType | any;

  public selected(): void {
    this.type = 'selected';
  }

  public reset(): void {
    this.type = undefined;
  }
}
