import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { Component, LOCALE_ID } from '@angular/core';

import { DssStatusArrowDirection, DssStatusArrowStatus } from '@dss/components';

registerLocaleData(pt, 'pt');

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class StatisticComponent {

  public items1 = [
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
    { label: 'Regular data', value: 9999 },
  ];

  public items2 = [
    { label: 'Regular data', value: 0.9 },
    { label: 'Regular data', value: -0.15 },
    { label: 'Regular data', value: 0.23 },
    { label: 'Regular data', value: 0.45 },
    { label: 'Regular data', value: 0.42 },
  ];

  public items3 = [
    { label: 'Regular data', value: -0.53 },
    { label: 'Regular data', value: 0.15 },
    { label: 'Regular data', value: -0.23 },
    { label: 'Regular data', value: -0.45 },
    { label: 'Regular data', value: 0.24 },
  ];

  public getStatus(value: number):  DssStatusArrowStatus{
  return  value < 0 ? 'negative' as DssStatusArrowStatus : 'positive' as DssStatusArrowStatus;
  }

  public getDirection(value: number): DssStatusArrowDirection {
    return value < 0 ? 'bottom' as DssStatusArrowDirection : 'top' as DssStatusArrowDirection;
  }
}
