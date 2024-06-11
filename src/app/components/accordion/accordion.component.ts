import { Component } from '@angular/core';
import { DssOptionInterface } from '@dss/components/dropdown';

import { DssOptionButtonOptionsInterface } from '@dss/components/option-button';

@Component({
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {

  public items = new Array(3);

  public itemActive: number | any;

  public optionButtonWithRadioOpen = false;

  public optionsRadio: Array<DssOptionButtonOptionsInterface> = [
    { option: 'Recebido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
    { option: 'Devolvido' },
  ];

  public radioGroup: string | any;

  public optionsCheckbox: Array<DssOptionButtonOptionsInterface> = [
    { option: '000001', checked: false },
    { option: '000002', checked: false },
    { option: '000003', checked: false },
    { option: '000004', checked: false },
    { option: '000005', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
    { option: '000006', checked: false },
  ];

  public optionButtonWithCheckboxOpen = false;

  public teams: Array<DssOptionInterface> = [
    { value: 'Real Madrid', viewValue: 'Real Madrid' },
    { value: 'Barcelona', viewValue: 'Barcelona' },
    { value: 'Manchester United', viewValue: 'Manchester United' },
    { value: 'Paris Saint-Germain', viewValue: 'Paris Saint-Germain' },
    { value: 'Borussia', viewValue: 'Borussia' }
  ];

  public selectedTeam: string | any;

  public opened(index: number | any): void {
    this.itemActive = index;
  }

  public closed(): void {
    this.itemActive = undefined;
  }

}
