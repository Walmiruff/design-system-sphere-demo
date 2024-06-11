import { Component } from '@angular/core';

@Component({
  templateUrl: './rate.component.html',
})
export class RateComponent {

  public items = new Array(3);

  public itemActive: number;

  public numberRate: number;

  public countRate(): void {
    console.log(this.numberRate);
  }

  public closed(): void {
    this.itemActive = undefined;
  }

}
