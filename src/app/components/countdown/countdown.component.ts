import { Component, ViewChild } from '@angular/core';

import { DssCountdownComponent } from '@dss/components/countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
})
export class CountdownComponent {

  @ViewChild('countdown') public countdown: DssCountdownComponent | any;

  public minute = 1;

  public second = 30;

  public restart(): void {
    this.countdown.initCountdown();
  }

}
