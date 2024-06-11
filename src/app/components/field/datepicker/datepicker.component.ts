import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DssCalendarComponent } from '@dss/components/calendar';
import { DssDatepickerRangeComponent } from '@dss/components/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements OnInit {
  public event = [
    new Date(2020, 5, 1),
    new Date(2020, 5, 2),
    new Date(2020, 5, 20),
  ];

  public disabledDays = [
    new Date(2022, 8, 7),
    new Date(2022, 9, 12),
    new Date(2022, 10, 2),
    new Date(2022, 10, 15),
    new Date(2022, 11, 25),
  ];

  public disabledDaysWeek = [
    0,
    6,
  ];

  public minDate = new Date(2021, 0, 1);
  public maxDate = new Date(2023, 0, 20);

  public input1: any = '';
  public input2: any = '31/07/2023';
  public input3: any = '';
  public input4: any = '';
  public input5: any = '';
  public input6 = { start: '01/11/2022', end: '10/11/2022' };
  public input7: any = '';
  public input8: any = '';
  public input9: any = '';
  public input10: any = '';
  public input11: any = '';

  public formGroup: FormGroup;
  public datepicker = '08/05/2009';
  public datepickerRange = { start: '01/11/2022', end: '10/11/2022' };
  public datepickerRangeFc: FormControl;

  public rangeInDays: number;

  @ViewChild('calendar') public calendar: DssCalendarComponent;
  @ViewChild('datepickerRange8') public datepickerRange8: DssDatepickerRangeComponent;

  public ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    this.datepickerRangeFc = new FormControl(this.datepickerRange, [Validators.required]);

    this.formGroup = new FormGroup({
      datepicker: new FormControl(this.datepicker, [Validators.required]),
      datepickerRange: this.datepickerRangeFc,
    });
  }

  public send(): void {
    this.formGroup.reset();
  }

  /**
   * Atalho para definir range em dias
   *
   * @example setRange(-7)
   */
  public setRange(rangeInDays: number): void {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(0, 0, 0, 0);

    if (rangeInDays > 0) {
      end.setDate(start.getDate() + rangeInDays - 1);
    } else {
      start.setDate(start.getDate() + rangeInDays + 1);
    }

    this.datepickerRange8.setDate(start, 'start');
    this.datepickerRange8.setDate(end, 'end');
    this.rangeInDays = rangeInDays;
  }

  public toggleDatepicker(status: string): void {
    alert(`Calendário ${status}!`);
  }
}
