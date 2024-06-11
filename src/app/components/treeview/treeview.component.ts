import { Component } from '@angular/core';

import { DssTreeviewDataInterface } from '@dss/components/treeview';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
})
export class TreeviewComponent {

  public treeDataBasic: Array<DssTreeviewDataInterface> = [
    {
      expanded: false,
      viewValue: 'Brasil',
      children: [
        {
          expanded: false,
          viewValue: 'São Paulo',
        },
        {
          expanded: false,
          viewValue: 'Rio de Janeiro',
        },
        {
          expanded: false,
          viewValue: 'Minas Gerais',
          children: [
            {
              expanded: false,
              viewValue: 'Belo Horizonte',
            },
            {
              expanded: false,
              viewValue: 'Uberlândia',
            },
            {
              expanded: false,
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Tocantins',
        },
      ],
    },
    {
      expanded: false,
      viewValue: 'Argentina',
      children: [
        {
          expanded: false,
          viewValue: 'Buenos Aires',
          children: [
            {
              expanded: false,
              viewValue: 'Buenos Aires',
            },
            {
              expanded: false,
              viewValue: 'La Plata',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Rosário',
          children: [
            {
              expanded: false,
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      expanded: false,
      viewValue: 'Chile',
      children: [
        {
          expanded: false,
          viewValue: 'Santiago',
          children: [
            {
              expanded: false,
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public treeDataBasic2: Array<DssTreeviewDataInterface> = [
    {
      expanded: true,
      viewValue: 'Brasil',
      children: [
        {
          expanded: false,
          viewValue: 'São Paulo',
          children: [
            {
              expanded: false,
              viewValue: 'São Paulo',
            },
            {
              expanded: false,
              viewValue: 'Ribeirão Preto',
            },
            {
              expanded: false,
              viewValue: 'Jundiaí',
            },
            {
              expanded: false,
              viewValue: 'Bauru',
            },
            {
              expanded: false,
              viewValue: 'Araraquara',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Rio de Janeiro',
          children: [
            {
              expanded: false,
              viewValue: 'Niterói',
            },
            {
              expanded: false,
              viewValue: 'Petrópolis',
            },
            {
              expanded: false,
              viewValue: 'São Gonçalo',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Minas Gerais',
          children: [
            {
              expanded: false,
              viewValue: 'Belo Horizonte',
            },
            {
              expanded: false,
              viewValue: 'Uberlândia',
            },
            {
              expanded: false,
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Tocantins',
          children: [
            {
              expanded: false,
              viewValue: 'Palmas',
            },
            {
              expanded: false,
              viewValue: 'Araguatins',
            },
            {
              expanded: false,
              viewValue: 'Porto Nacional',
            },
          ],
        },
      ],
    },
    {
      expanded: true,
      viewValue: 'Argentina',
      children: [
        {
          expanded: false,
          viewValue: 'Buenos Aires',
          children: [
            {
              expanded: false,
              viewValue: 'Buenos Aires',
            },
            {
              expanded: false,
              viewValue: 'La Plata',
            },
          ],
        },
        {
          expanded: false,
          viewValue: 'Rosário',
          children: [
            {
              expanded: false,
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      expanded: true,
      viewValue: 'Chile',
      children: [
        {
          expanded: false,
          viewValue: 'Santiago',
          children: [
            {
              expanded: false,
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public treeDataCheckbox: Array<DssTreeviewDataInterface> = [
    {
      expanded: false,
      checked: false,
      value: 'brasil',
      viewValue: 'Brasil',
      children: [
        {
          expanded: false,
          checked: false,
          value: 'sp',
          viewValue: 'São Paulo',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'sap paulo',
              viewValue: 'São Paulo',
            },
            {
              expanded: false,
              checked: false,
              value: 'ribeirao preto',
              viewValue: 'Ribeirão Preto',
            },
            {
              expanded: false,
              checked: false,
              value: 'jundiai',
              viewValue: 'Jundiaí',
            },
            {
              expanded: false,
              checked: false,
              value: 'bauru',
              viewValue: 'Bauru',
            },
            {
              expanded: false,
              checked: false,
              value: 'araraquara',
              viewValue: 'Araraquara',
            },
          ],
        },
        {
          expanded: false,
          checked: false,
          value: 'rj',
          viewValue: 'Rio de Janeiro',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'niteroi',
              viewValue: 'Niterói',
            },
            {
              expanded: false,
              checked: false,
              value: 'petropolis',
              viewValue: 'Petrópolis',
            },
            {
              expanded: false,
              checked: false,
              value: 'sao goncalo',
              viewValue: 'São Gonçalo',
            },
          ],
        },
        {
          expanded: false,
          checked: false,
          value: 'mg',
          viewValue: 'Minas Gerais',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'bh',
              viewValue: 'Belo Horizonte',
            },
            {
              expanded: false,
              checked: false,
              value: 'uberlandia',
              viewValue: 'Uberlândia',
            },
            {
              expanded: false,
              checked: false,
              value: 'ouro preto',
              viewValue: 'Ouro Preto',
            },
          ],
        },
        {
          expanded: false,
          checked: false,
          value: 'to',
          viewValue: 'Tocantins',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'palmas',
              viewValue: 'Palmas',
            },
            {
              expanded: false,
              checked: false,
              value: 'araguatins',
              viewValue: 'Araguatins',
            },
            {
              expanded: false,
              checked: false,
              value: 'porto nacional',
              viewValue: 'Porto Nacional',
            },
          ],
        },
      ],
    },
    {
      expanded: false,
      checked: false,
      value: 'argentina',
      viewValue: 'Argentina',
      children: [
        {
          expanded: false,
          checked: false,
          value: 'ba',
          viewValue: 'Buenos Aires',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'buenos aires',
              viewValue: 'Buenos Aires',
            },
            {
              expanded: false,
              checked: false,
              value: 'la plata',
              viewValue: 'La Plata',
            },
          ],
        },
        {
          expanded: false,
          checked: false,
          value: 'rosario',
          viewValue: 'Rosário',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'santa fe',
              viewValue: 'Santa Fé',
            },
          ],
        },
      ],
    },
    {
      expanded: false,
      checked: false,
      value: 'chile',
      viewValue: 'Chile',
      children: [
        {
          expanded: false,
          checked: false,
          value: 'santiago',
          viewValue: 'Santiago',
          children: [
            {
              expanded: false,
              checked: false,
              value: 'la serena',
              viewValue: 'La Serena',
            },
          ],
        },
      ],
    },
  ];

  public expandAll(): void {
    this.treeDataBasic.forEach((item: DssTreeviewDataInterface) => {
      this.expandRecursive(item, true);
    });
  }

  public collapseAll(): void {
    this.treeDataBasic.forEach((item: DssTreeviewDataInterface) => {
      this.expandRecursive(item, false);
    });
  }

  private expandRecursive(tree: DssTreeviewDataInterface, isExpand: boolean): void {
    tree.expanded = isExpand;

    if (tree.children) {
      tree.children.forEach((child: DssTreeviewDataInterface) => {
        this.expandRecursive(child, isExpand);
      });
    }
  }
}
