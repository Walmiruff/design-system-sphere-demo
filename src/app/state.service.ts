import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private switchSideBar = new BehaviorSubject<boolean>(false);
  switchStateSideBar = this.switchSideBar.asObservable();

  constructor() { }

  toggleSwitch() {
    this.switchSideBar.next(!this.switchSideBar.value);
  }
}
