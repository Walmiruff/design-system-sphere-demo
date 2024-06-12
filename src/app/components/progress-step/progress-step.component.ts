import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
})
export class ProgressStepComponent {

  public activeSteps1 = 1;
  public activeSteps2 = 1;
  public activeSteps3 = 1;

  public progress1(): number {
    return this.activeSteps1 += 1;
  }

  public goBack1(): number {
    return this.activeSteps1 -= 1;
  }

  public progress2(): number {
    return this.activeSteps2 += 1;
  }

  public goBack2(): number {
    return this.activeSteps2 -= 1;
  }


  public progress3(): number {
    return this.activeSteps3 += 1;
  }

  public goBack3(): number {
    return this.activeSteps3 -= 1;
  }

}
