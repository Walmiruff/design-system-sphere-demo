import { Component } from '@angular/core';

import { DssOptionButtonOptionsInterface } from '@dss/components/option-button';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styles: [
    '.example { padding-bottom: 300px; }',
  ],
})
export class OptionButtonComponent {

  public options: Array<DssOptionButtonOptionsInterface> = [
    { icon: 'add', option: 'Adicionar' },
    { icon: 'edit', option: 'Editar' },
    { icon: 'trash-bin', option: 'Excluir' },
  ];

  public input1 = '';

  public input3 = '';

  public optionsSimple: Array<DssOptionButtonOptionsInterface> = [
    { option: 'Adicionar' },
    { option: 'Editar' },
    { option: 'Excluir' },
  ];

  public input2 = '';

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

  public optionButtonWithRadioOpen = false;

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

  public disabled(): boolean {
    return this.optionsCheckbox.findIndex((option: DssOptionButtonOptionsInterface) => option.checked) === -1;
  }

}
