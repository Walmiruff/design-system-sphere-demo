<h1 align="center">Bem vindo ao @dss/components/accordion 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Accordion.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DssAccordionModule } from '@dss/components/accordion';
import { DssButtonModule } from '@dss/components/button';
import { DssCheckboxModule } from '@dss/components/checkbox';
import { DssDropdownModule } from '@dss/components/dropdown';
import { DssFormFieldModule } from '@dss/components/form-field';
import { DssOptionButtonModule } from '@dss/components/option-button';
import { DssRadioGroupModule } from '@dss/components/radio-group';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DssAccordionModule,
    DssButtonModule,
    DssRadioGroupModule,
    DssOptionButtonModule,
    DssCheckboxModule,
    DssDropdownModule,
    DssFormFieldModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

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

  public radioGroup: string;

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
    { value: 'Internacional', viewValue: 'Internacional' },
    { value: 'Vasco', viewValue: 'Vasco' },
    { value: 'Atlético-MG', viewValue: 'Atlético-MG' },
    { value: 'Palmeiras', viewValue: 'Palmeiras' },
    { value: 'São Paulo', viewValue: 'São Paulo' },
    { value: 'Santos', viewValue: 'Santos' },
    { value: 'Fluminense', viewValue: 'Fluminense' },
    { value: 'Bahia', viewValue: 'Bahia' },
    { value: 'Grêmio', viewValue: 'Grêmio' },
    { value: 'Athletico-PR', viewValue: 'Athletico-PR' },
    { value: 'Botafogo', viewValue: 'Botafogo' },
    { value: 'Bragantino', viewValue: 'Bragantino' },
    { value: 'Flamengo', viewValue: 'Flamengo' },
    { value: 'Corinthians', viewValue: 'Corinthians' },
    { value: 'Goiás', viewValue: 'Goiás' },
    { value: 'Fortaleza', viewValue: 'Fortaleza' },
    { value: 'Atlético-GO', viewValue: 'Atlético-GO' },
    { value: 'Sport', viewValue: 'Sport' },
    { value: 'Ceará', viewValue: 'Ceará' },
    { value: 'Coritiba', viewValue: 'Coritiba' },
  ];

  public selectedTeam: string;
  
}
```

###### `template`

###### `Padrão`

```html
<dss-accordion>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 01</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 02</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 03</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

###### `Com Ícones`

```html
<dss-accordion>
  <dss-accordion-item>
    <span dssIcon name="debt" size="medium"></span>
    <h1 dssAccordionItemTitle>Accordion 01</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <span dssIcon name="exhange" size="medium"></span>
    <h1 dssAccordionItemTitle>Accordion 02</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <span dssIcon name="modify-liquidation-method" size="medium"></span>
    <h1 dssAccordionItemTitle>Accordion 03</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

###### `Com Números`

```html
<dss-accordion [itemsNumber]="true">
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 01</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 02</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 03</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

###### `Começando um um item aberto`

```html
<dss-accordion>
  <dss-accordion-item [isExpanded]="true">
    <h1 dssAccordionItemTitle>Accordion 01</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 02</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 03</h1>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

##### `Usando o Accordion como um Filter`

```html
<dss-accordion>
  <dss-accordion-item [isFilter]="true">
    <h1 dssAccordionItemTitle>Accordion de Filter</h1>
    <ng-container dssAccordionItemBody>
      <div class="dss-grid dss-no-gutter">
        <div class="dss-col-4 dss-col-no-gutter">
          <dss-option-button [toggleSelection]="true" [open]="optionButtonWithRadioOpen" (optionButtonOpen)="optionButtonWithRadioOpen = $event">
            <dss-option-button-label>Lançamento</dss-option-button-label>
            <dss-option-button-label-selection>{{ optionsRadio[radioGroup]?.option }}</dss-option-button-label-selection>
            <dss-option-button-selection style="width: 250px;">
              <dss-option-button-selection-title>Tipo de lançamento</dss-option-button-selection-title>
              <dss-radio-group [(ngModel)]="radioGroup">
                <dss-radio-button *ngFor="let radio of optionsRadio; index as i" [value]="i">{{ radio.option }}</dss-radio-button>
              </dss-radio-group>
            </dss-option-button-selection>
            <dss-option-button-action>
              <button dssOutlineButton [disabled]="!optionsRadio[radioGroup]?.option" (click)="optionButtonWithRadioOpen = false">Aplicar</button>
            </dss-option-button-action>
          </dss-option-button>
        </div>
        <div class="dss-col-4 dss-col-no-gutter">
          <dss-option-button [toggleSelection]="true" [open]="optionButtonWithCheckboxOpen" (optionButtonOpen)="optionButtonWithCheckboxOpen = $event">
            <dss-option-button-label>Contrato</dss-option-button-label>
            <dss-option-button-label-selection>Todos</dss-option-button-label-selection>
            <dss-option-button-selection style="width: 250px;">
              <ng-container *ngFor="let checkbox of optionsCheckbox; index as i">
                <dss-checkbox [checked]="checkbox.checked" (change)="checkbox.checked = $event.checked">{{ checkbox.option }}</dss-checkbox>
              </ng-container>
            </dss-option-button-selection>
            <hr dssDivider>
            <dss-option-button-action>
              <button dssFilledButton (click)="optionButtonWithCheckboxOpen = false">Aplicar</button>
            </dss-option-button-action>
          </dss-option-button>
        </div>
        <div class="dss-col-3 dss-col-no-gutter">
          <dss-form-field>
            <dss-dropdown [(ngModel)]="selectedTeam" [options]="teams">
              <option *dssOption="let team">{{ team.viewValue }}</option>
            </dss-dropdown>
            <label dssLabel>Selecione um time</label>
          </dss-form-field>
        </div>
      </div>
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

###### `Com Subtítulo`

```html
<dss-accordion>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 01</h1>
    <h2 dssAccordionItemSubTitle>Subtitle 02</h2>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 02</h1>
    <h2 dssAccordionItemSubTitle>Subtitle 02</h2>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
  <dss-accordion-item>
    <h1 dssAccordionItemTitle>Accordion 03</h1>
    <h2 dssAccordionItemSubTitle>Subtitle 03</h2>
    <ng-container dssAccordionItemBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id ratione voluptatem. Cumque fugiat pariatur sequi vero! A accusantium ad dolore dolorum molestias quis unde? Alias modi molestias officiis tenetur.
    </ng-container>
  </dss-accordion-item>
</dss-accordion>
```

###### `Inputs - Accordion`
Name        | Type    | Default | Obs                                           |
----------- | ------- | ------- | --------------------------------------------- |
itemsNumber | boolean | false   | -                                             |
digitsInfo  | string  | 1.0-0   | -                                             |
openSeveral | boolean | false   | Permite abrir mais de um item ao mesmo tempo. |

###### `Inputs - Accordion Item`
Name       | Type    | Default | Obs |
---------- | ------- | ------- | --- |
isExpanded | boolean | false   | -   |
isFilter   | boolean | false   | -   |

###### `Outputs - Accordion Item`
Name   | Type                     | Obs |
------ | ------------------------ | --- |
opened | EventEmitter&lt;void&gt; | -   |
closed | EventEmitter&lt;void&gt; | -   |

###### `Directives`
Name                     | Type | Default  | Obs |
------------------------ | ---- | -------- | --- |
dssAccordionItemTitle    | -    | -        | -   |
dssAccordionItemSubTitle | -    | -        | -   |
dssAccordionItemBody     | -    | -        | -   |

## Executar testes

```shell
npm run test
```
