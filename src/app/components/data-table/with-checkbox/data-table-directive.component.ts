import { Component, OnInit } from '@angular/core';

import { database } from '../../../utils/faker';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  templateUrl: './data-table-directive.component.html',
})
export class DataTableWithCheckboxComponent implements OnInit {
  public input = '';

  public dataSource: Array<DataSourceInterface> = [];

  public ngOnInit(): void {
    const mock = [
      [
        'selected',
        'datatype',
        'boolean',
      ],
      [
        'name',
        'name',
        'firstName',
      ],
      [
        'cpf',
        'cpfFake',
      ],
      [
        'code',
        'random',
        'alpha',
        '{"count": 7, "upcase": true}',
      ],
      [
        'age',
        'datatype',
        'number',
        '{"min": 18, "max": 80}',
      ],
      [
        'nationality',
        'address',
        'country',
      ],
    ];

    this.dataSource = database(mock);
  }
}
