import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-toast',
  templateUrl: './alert-toast.component.html',
})
export class AlertToastComponent {

  public openInfo = false;

  public openWarning = false;

  public openDanger = false;

  public openSuccess = false;

}
