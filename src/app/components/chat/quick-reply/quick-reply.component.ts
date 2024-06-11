import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface OptionsInterface {
  value: number;
  label: string;
}

const OPTIONS: Array<OptionsInterface> = [
  { value: 1, label: 'Abrir conta' },
  { value: 2, label: 'Auxílio emergencial' },
  { value: 3, label: 'Verificar limite' },
  { value: 4, label: 'Contratar seguros' },
  { value: 5, label: 'Financiamento' },
  { value: 6, label: 'Empréstimos' },
];

const FAKE_OBSERVABLE = of(OPTIONS)
  .pipe(delay(1000));

@Component({
  selector: 'app-quick-reply',
  templateUrl: './quick-reply.component.html',
})
export class QuickReplyComponent implements OnInit {

  public options: Array<OptionsInterface> = [];

  public input1: number;

  public input2: string;

  public input4: string;

  public formGroup: FormGroup;

  constructor(private _builder: FormBuilder) { }

  public ngOnInit(): void {
    this.formGroup = this._builder.group({
      input3: [null],
    });

    FAKE_OBSERVABLE.subscribe((result: Array<OptionsInterface>) => {
      this.options = result;
      this.input1 = 2;
    });
  }

}
