import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface DataSourceInterface {
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

const DATA_SOURCE: Array<DataSourceInterface> = [
  { name: 'Optimus Prime', cpf: '778.769.370-39', code: '', age: 33, nationality: 'Cybertron' },
  { name: 'Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
  { name: 'Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
  { name: 'Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
  { name: 'Starscream', cpf: '558.375.100-28', code: '', age: 33, nationality: 'Cybertron' },
  { name: 'Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
  { name: 'Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
  { name: 'Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
  { name: 'Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
  { name: 'Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
  { name: 'The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
  { name: 'Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
  { name: 'Frenzy', cpf: '786.856.100-95', code: '', age: 33, nationality: 'Cybertron' },
  { name: 'Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
  { name: 'Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
  { name: 'Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
  { name: 'Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
];

const FAKE_OBSERVABLE = of(DATA_SOURCE).pipe(delay(1000));

@Component({
  templateUrl: './data-table.component.html',
})
export class DataTableActionsComponent implements OnInit {
  public input = '';

  public dataSource: Array<DataSourceInterface> | any;

  public ngOnInit(): void {
    FAKE_OBSERVABLE.subscribe((result: Array<DataSourceInterface>) => (this.dataSource = result));
  }
}
