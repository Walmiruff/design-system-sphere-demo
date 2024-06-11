import { Component, OnInit, ViewChild } from '@angular/core';

import { DssCalendarComponent, DssCalendarEventDate } from '@dss/components/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  public eventosExemplo1 = new Date(2021, 4, 3);

  public eventosExemplo2 = new DssCalendarEventDate(
    new Date(2021, 4, 22),
    `
<p dssTypography type="body" color="redLight1">Movimento desta data</p>
<p><em  style="font-weight: bold">Quantidade:</em><span>23</span></p>
<p><em  style="font-weight: bold">Valor Total:</em><span> R$ 22.122,22</span></p>`,
    'bottomRight',
    'light',
    'hover',
  );

  public eventosExemplo3 = [
    new Date(2021, 4, 1),
    new Date(2021, 4, 2),
    new Date(2021, 4, 21),
    new DssCalendarEventDate(
      new Date(2021, 4, 22),
      `
<p dssTypography type="body" color="redLight1">Movimento desta data</p>
<p><em  style="font-weight: bold">Quantidade:</em><span>23</span></p>
<p><em  style="font-weight: bold">Valor Total:</em><span> R$ 22.122,22</span></p>`,
      'bottomRight',
      'light',
      'hover',
    ),
    new DssCalendarEventDate(
      new Date(2021, 4, 23),
      `
<p dssTypography type="body" color="redLight1">Movimento desta data</p>
<p><em  style="font-weight: bold">Quantidade:</em><span>23</span></p>
<p><em  style="font-weight: bold">Valor Total:</em><span> R$ 23.323,23</span></p>`,
      'right',
      'light',
      'hover',
    ),
    new DssCalendarEventDate(
      new Date(2021, 4, 24),
      `
<p dssTypography type="body" color="redLight1">Movimento desta data</p>
<p><em  style="font-weight: bold">Quantidade:</em><span>23</span></p>
<p><em  style="font-weight: bold">Valor Total:</em><span> R$ 24.424,24</span></p>`,
      'right',
      'light',
      'hover',
    ),
  ];

  public disabledDays = [
    0,
    6,
  ];

  public minDate = new Date(2020, 4, 5);

  public maxDate = new Date(2021, 4, 30);

  public raw = true;

  @ViewChild('calendar1', { static: true }) public calendar1: DssCalendarComponent | any;

  @ViewChild('calendar2', { static: true }) public calendar2: DssCalendarComponent | any;

  @ViewChild('calendar3', { static: true }) public calendar3: DssCalendarComponent | any;

  public ngOnInit(): void {
    this.calendar1.open();
    this.calendar2.open();
    this.calendar3.open();
  }
}
