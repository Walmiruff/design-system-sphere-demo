import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class ProgressLoaderComponent {

  public value1: number = 50;

  public value2: number = 100;

  public value3: number = 100;

  public isError = false;

  public isSuccess = false;

  private _idInterval;

  public upload(): void {
    this._idInterval = setInterval(() => {
      if (this.value1 < 100) {
        this.value1 += 1;
      } else {
        clearInterval(this._idInterval);
        this.isSuccess = true;
      }
    }, 200);
  }

}
