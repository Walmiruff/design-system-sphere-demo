import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DssRadioGroupOptionsInterface } from '@dss/components/radio-group';

@Component({
  selector: 'app-card',
  templateUrl: './card-option.component.html',
})
export class CardOptionComponent implements OnInit {

  public options: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'xls' }],
    [{ value: 'doc' }],
    [{ value: 'pdt' }],
  ];

  public cardOption1 = false;

  public cardOption2 = '';

  public cardOption3 = false;

  public optionsCreditCard: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: '3454' }],
    [{ value: '1245' }],
    [{ value: '2727' }],
    [{ value: '9900' }],
  ];

  public cardOption4 = '';

  public cardOption5 = false;

  public optionsIcons: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'atenção' }],
    [{ value: 'fechar' }],
    [{ value: 'ok' }],
    [{ value: 'abrir' }],
  ];

  public cardOption6 = '';

  public cardOption7 = false;

  public features = {
    basicFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: false},
      {label: 'Feature D', check: false},
      {label: 'Feature E', check: false},
      {label: 'Feature F', check: false},
    ],
    masterFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: true},
      {label: 'Feature D', check: true},
      {label: 'Feature E', check: false},
      {label: 'Feature F', check: false},
    ],
    blasterFeatures: [
      {label: 'Feature A', check: true},
      {label: 'Feature B', check: true},
      {label: 'Feature C', check: true},
      {label: 'Feature D', check: true},
      {label: 'Feature E', check: true},
      {label: 'Feature F', check: true},
    ],
  };

  public optionsFeature: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'basic' }],
    [{ value: 'master' }],
    [{ value: 'blaster' }],
  ];

  public cardOption8 = '';

  public cardOption9 = false;

  public optionsText: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'Opção 1' }],
    [{ value: 'Opção 2' }],
    [{ value: 'Opção 3' }],
  ];

  public cardOption10 = '';

  public optionsForm: Array<Array<DssRadioGroupOptionsInterface>> = [
    [{ value: 'xls' }],
    [{ value: 'doc' }],
    [{ value: 'pdt' }],
  ];

  public formGroup: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      file: ['doc', Validators.required],
      cardMasterCard: [false],
      cardVisa: [true],
    });
  }

  public send(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

}
