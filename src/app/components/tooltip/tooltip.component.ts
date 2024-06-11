import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  public input1 = '';

  public input2 = '';

  public input3 = '';

  public input4 = '';

  public addCode(event: any, value: string): void {
    event.preventDefault();
    this.input3 = value;
  }
}
