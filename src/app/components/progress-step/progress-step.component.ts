import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
})
export class ProgressStepComponent {

  public activeSteps1 = 1;
  public activeSteps2 = 1;
  public activeSteps3 = 1;

  public progress(step: string): void {
    this[step] += 1;
  }

  public goBack(step: string): void {
    this[step] -= 1;
  }

}
