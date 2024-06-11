import { Component } from '@angular/core';
import { DssSortChangeInterface } from '@dss/components/data-table';

export interface DataSourceInterface {
  id: string;
  name: string;
  cpf: string;
  code: string;
  age: number;
  nationality: string;
}

@Component({
  templateUrl: './data-table.component.html',
})
export class DataTableColumnFilterComponent {
  public input = '';

  public column = 'name';

  public order = 'desc';

  public sortBy = '';
  public orderBy = '';

  // 62
  public dataSource: Array<DataSourceInterface> = [
    { id: '1001 ', name: '1 - Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 35, nationality: 'Cybertron' },
    { id: '1002 ', name: '2 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 13, nationality: 'Cybertron' },
    { id: '1003 ', name: '3 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 3, nationality: 'Cybertron' },
    { id: '1004 ', name: '4 - Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 37, nationality: 'Cybertron' },
    { id: '1005 ', name: '5 - Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 10, nationality: 'Cybertron' },
    { id: '1006 ', name: '6 - Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { id: '1007 ', name: '7 - Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { id: '1008 ', name: '8 - Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { id: '1009 ', name: '9 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10010', name: '10 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10011', name: '11 - Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { id: '10012', name: '12 - Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { id: '10013', name: '13 - The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { id: '10014', name: '14 - Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { id: '10015', name: '15 - Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { id: '10016', name: '16 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10017', name: '17 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10018', name: '18 - Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { id: '10019', name: '19 - Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { id: '10020', name: '20 - Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
    { id: '10021', name: '21 - Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { id: '10022', name: '22 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { id: '10023', name: '23 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { id: '10024', name: '24 - Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { id: '10025', name: '25 - Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { id: '10026', name: '26 - Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { id: '10027', name: '27 - Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { id: '10028', name: '28 - Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { id: '10029', name: '29 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10030', name: '30 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10031', name: '31 - Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { id: '10032', name: '32 - Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { id: '10033', name: '33 - The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { id: '10034', name: '34 - Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { id: '10035', name: '35 - Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { id: '10036', name: '36 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10037', name: '37 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10038', name: '38 - Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { id: '10039', name: '39 - Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { id: '10040', name: '40 - Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
    { id: '10041', name: '41 - Optimus Prime', cpf: '778.769.370-39', code: '7STDZK6', age: 33, nationality: 'Cybertron' },
    { id: '10042', name: '42 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { id: '10043', name: '43 - Bumblebee', cpf: '984.586.790-19', code: '023XA26', age: 33, nationality: 'Cybertron' },
    { id: '10044', name: '44 - Megatron', cpf: '761.931.810-08', code: 'M453KDI', age: 33, nationality: 'Cybertron' },
    { id: '10045', name: '45 - Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { id: '10046', name: '46 - Ironhide', cpf: '123.982.180-82', code: '04747M7', age: 33, nationality: 'Cybertron' },
    { id: '10047', name: '47 - Starscream', cpf: '558.375.100-28', code: '8ZPYZG7', age: 33, nationality: 'Cybertron' },
    { id: '10048', name: '48 - Sentinel Prime', cpf: '827.848.460-08', code: 'ZKM0VRR', age: 33, nationality: 'Cybertron' },
    { id: '10049', name: '49 - Hot Rod', cpf: '135.062.290-79', code: 'R5P5PZX', age: 33, nationality: 'Cybertron' },
    { id: '10050', name: '50 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10051', name: '51 - Jazz', cpf: '183.485.960-38', code: 'QYUO3RM', age: 33, nationality: 'Cybertron' },
    { id: '10052', name: '52 - Warpath', cpf: '314.968.010-75', code: '257DC5J', age: 33, nationality: 'Cybertron' },
    { id: '10053', name: '53 - Daytrader', cpf: '147.637.960-20', code: 'T9YNW15', age: 33, nationality: 'Cybertron' },
    { id: '10054', name: '54 - The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { id: '10055', name: '55 - The Fallen', cpf: '576.747.910-09', code: 'AGKJNOR', age: 33, nationality: 'Cybertron' },
    { id: '10056', name: '56 - Barricade', cpf: '231.809.110-26', code: '2BOQEGS', age: 33, nationality: 'Cybertron' },
    { id: '10057', name: '57 - Frenzy', cpf: '786.856.100-95', code: 'CUS9VI1', age: 33, nationality: 'Cybertron' },
    { id: '10058', name: '58 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10059', name: '59 - Ravage', cpf: '558.157.030-28', code: 'UR81ZCG', age: 33, nationality: 'Cybertron' },
    { id: '10060', name: '60 - Lockdown', cpf: '734.305.350-77', code: 'GDCL3FE', age: 33, nationality: 'Cybertron' },
    { id: '10061', name: '61 - Stinger', cpf: '302.258.190-40', code: 'WGMUG70', age: 33, nationality: 'Cybertron' },
    { id: '10062', name: '62 - Junkheap', cpf: '482.724.060-47', code: 'C97JK1K', age: 33, nationality: 'Cybertron' },
  ];

  public columnFilter: Array<string> = [
    'name',
    'cpf',
    'code',
  ];

  public compareAges(a: Record<string, number | any>, b: Record<string, number | any>): number | any {
    const currentColumnValueA = a['age'] || 0;
    const currentColumnValueB = b['age'] || 0;
    return currentColumnValueA - currentColumnValueB;
  }

  public handleSortChange({ column, order }: DssSortChangeInterface): void {
    this.sortBy = column;
    this.orderBy = order;
  }
}
