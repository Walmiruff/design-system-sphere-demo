import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DssCascaderOptionInterface } from '@dss/components/cascader';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
})
export class CascaderComponent implements OnInit {

  public cascader1 = '';

  public cascader2 = '';

  public cascader3 = '';

  public cascader4 = ['brasil', 'sp', 'sao paulo'];

  public cascader5 = '';

  public options: Array<DssCascaderOptionInterface> = [
    {
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          value: 'sp',
          viewValue: 'São Paulo',
          children: [
            {
              value: 'sao paulo',
              viewValue: 'São Paulo',
            },
            {
              value: 'ribeirao preto',
              viewValue: 'Ribeirão Preto',
            },
            {
              value: 'jundia',
              viewValue: 'Jundiaí',
            },
            {
              value: 'bauru',
              viewValue: 'Bauru',
            },
            {
              value: 'araraquara',
              viewValue: 'Araraquara',
            },
          ],
        },
        {
          value: 'rj',
          viewValue: 'Rio de Janeiro',
          children: [
            {
              value: 'niteroi',
              viewValue: 'Niterói',
            },
            {
              value: 'petropolis',
              viewValue: 'Petrópolis',
            },
            {
              value: 'sao goncalo',
              viewValue: 'São Gonçalo',
            },
          ],
        },
        {
          value: 'mg',
          viewValue: 'Minas Gerais',
          children: [
            {
              value: 'belo horizonte',
              viewValue: 'Belo Horizonte',
            },
            {
              value: 'uberlandia',
              viewValue: 'Uberlândia',
            },
            {
              value: 'ouro preto',
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          value: 'to',
          viewValue: 'Tocantins',
          children: [
            {
              value: 'palmas',
              viewValue: 'Palmas',
            },
            {
              value: 'araguatins',
              viewValue: 'Araguatins',
            },
            {
              value: 'porto nacional',
              viewValue: 'Porto Nacional',
            },
          ],
        },
      ],
    },
    {
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          viewValue: 'Buenos Aires',
          children: [
            {
              value: 'buenos aires',
              viewValue: 'Buenos Aires',
            },
            {
              value: 'la plata',
              viewValue: 'La Plata',
            },
          ],
        },
        {
          value: 'rosario',
          viewValue: 'Rosário',
          children: [
            {
              value: 'santa fe',
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          value: 'santiago',
          viewValue: 'Santiago',
          children: [
            {
              value: 'la serena',
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public options2: Array<DssCascaderOptionInterface> = [
    {
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          value: 'sp',
          viewValue: 'São Paulo',
        },
        {
          value: 'rj',
          viewValue: 'Rio de Janeiro',
        },
        {
          value: 'mg',
          viewValue: 'Minas Gerais',
        },
        {
          value: 'to',
          viewValue: 'Tocantins',
        },
      ],
    },
    {
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          viewValue: 'Buenos Aires',
        },
        {
          value: 'rosario',
          viewValue: 'Rosário',
        },
      ],
    },
    {
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          value: 'santiago',
          viewValue: 'Santiago',
        },
      ],
    },
  ];

  public options3: Array<DssCascaderOptionInterface> = [
    {
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          value: 'sp',
          viewValue: 'São Paulo',
          children: [
            {
              value: 'sao paulo',
              viewValue: 'São Paulo',
              children: [
                {
                  value: 'jd aracati',
                  viewValue: 'Jd. Aracati',
                },
              ],
            },
            {
              value: 'ribeirao preto',
              viewValue: 'Ribeirão Preto',
              children: [
                {
                  value: 'campos elisios',
                  viewValue: 'Campos Elísios',
                },
              ],
            },
            {
              value: 'jundia',
              viewValue: 'Jundiaí',
              children: [
                {
                  value: 'vila savieto',
                  viewValue: 'Vila Savieto',
                },
              ],
            },
            {
              value: 'bauru',
              viewValue: 'Bauru',
              children: [
                {
                  value: 'vila camargo',
                  viewValue: 'Vila Camargo',
                },
              ],
            },
            {
              value: 'araraquara',
              viewValue: 'Araraquara',
              children: [
                {
                  value: 'jd almeida',
                  viewValue: 'Jd. Almeida',
                },
              ],
            },
          ],
        },
        {
          value: 'rj',
          viewValue: 'Rio de Janeiro',
          children: [
            {
              value: 'niteroi',
              viewValue: 'Niterói',
            },
            {
              value: 'petropolis',
              viewValue: 'Petrópolis',
            },
            {
              value: 'sao goncalo',
              viewValue: 'São Gonçalo',
            },
          ],
        },
        {
          value: 'mg',
          viewValue: 'Minas Gerais',
          children: [
            {
              value: 'belo horizonte',
              viewValue: 'Belo Horizonte',
            },
            {
              value: 'uberlandia',
              viewValue: 'Uberlândia',
            },
            {
              value: 'ouro preto',
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          value: 'to',
          viewValue: 'Tocantins',
          children: [
            {
              value: 'palmas',
              viewValue: 'Palmas',
            },
            {
              value: 'araguatins',
              viewValue: 'Araguatins',
            },
            {
              value: 'porto nacional',
              viewValue: 'Porto Nacional',
            },
          ],
        },
      ],
    },
    {
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          viewValue: 'Buenos Aires',
          children: [
            {
              value: 'buenos aires',
              viewValue: 'Buenos Aires',
            },
            {
              value: 'la plata',
              viewValue: 'La Plata',
            },
          ],
        },
        {
          value: 'rosario',
          viewValue: 'Rosário',
          children: [
            {
              value: 'santa fe',
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          value: 'santiago',
          viewValue: 'Santiago',
          children: [
            {
              value: 'la serena',
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      cascaderForm: [
        ['argentina', 'rosario', 'santa fe'],
        [ Validators.required ]],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset();
    }
  }

}
