import { DOCUMENT } from '@angular/common';
import { Component, Inject, Optional, Renderer2 } from '@angular/core';

import { DssOptionInterface } from '@dss/components/dropdown';
import { DssI18nService } from '@dss/components/i18n';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public  title = 'design-system-sphere-demo';
  public theme = 'default';
  private _styleId: string | null = null;
  public selectedItem!: string;
  public languages: Array<DssOptionInterface> = [
    { value: 'pt-BR', viewValue: 'Português' },
    { value: 'es', viewValue: 'Español' },
    { value: 'en', viewValue: 'English' },
  ];


  constructor(
    @Optional() private readonly i18n: DssI18nService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    if (this.i18n !== null) {
      this.selectedItem = this.i18n.currentLocale;
    }
  }

  public onOptionSelected(event: any): void {
      this.i18n.setLocale(event.value);
  }

  public changeTheme(event: any): void {
    this.theme = event.checked ? 'default' : 'dark';

    if (this.theme === 'default') {
      this.renderer.removeClass(this.document.querySelector('body'), 'dss-dark');
    } else {
      this.renderer.addClass(this.document.querySelector('body'), 'dss-dark');
    }

    this.loadStyle(this.theme);
  }
  
  private loadStyle(theme: string): void {
   

    let href = `${environment.cssUrlPath}assets/css/${theme === 'default' ? '' : `${theme}-`}only-style.min.css`;
    this._styleId = `style-default-theme-${theme}`;

    const head = this.document.querySelector('head');
    const style = this.document.createElement('link');
    style.id = this._styleId;
    style.rel = 'stylesheet';
    style.href = href;
    head?.appendChild(style);

  }
}
