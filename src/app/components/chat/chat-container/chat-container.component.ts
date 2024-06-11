import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
})
export class ChatContainerComponent {

  public input = '';

  public options: Array<{ value: string; label: string }> = [
    { value: '1', label: 'Abrir conta' },
    { value: '2', label: 'Auxílio emergencial' },
    { value: '3', label: 'Verificar limite' },
    { value: '4', label: 'Contratar seguros' },
    { value: '5', label: 'Financiamento' },
    { value: '6', label: 'Empréstimos' },
  ];

}
