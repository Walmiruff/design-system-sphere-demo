import { Component } from '@angular/core';

import { DssLogoSize, DssLogoType } from '@dss/components/logo';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  public cardLogos: Array<DssLogoType> = [
    'generic',
    'alelo',
    'amex',
    'banes',
    'ben',
    'dinners',
    'elo',
    'good-card',
    'good-vale',
    'google-play',
    'hiper',
    'hipercard',
    'maestro',
    'mastercard',
    'paypal',
    'sodexo',
    'ticket',
    'verde-card',
    'visa',
    'vr',
  ];

  public bankLogos: Array<DssLogoType> = [
    'bank',
    'banco-hyundai',
    'banco-nordeste',
    'banco-pan',
    'banco-psa',
    'banco-rci',
    'bb',
    'bradesco',
    'caceis',
    'caixa',
    'getnet',
    'inter',
    'itau',
    'itaucard',
    'iti',
    'mercado-pago',
    'nu-bank',
    'pi',
    'pic-pay',
    'sim',
    'toro',
    'votorantim',
  ];

  public santanderLogos: Array<DssLogoType> = [
    'santander-icon',
    'santander-icon-secondary',
    'santander-primary',
    'santander-secondary',
  ];

  public sizes: Array<DssLogoSize> = [
    'extra-small',
    'small',
    'default',
    'medium',
    'large',
    'extra-large',
  ];
}
