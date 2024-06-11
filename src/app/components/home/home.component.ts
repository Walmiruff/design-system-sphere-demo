import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Optional, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DssOptionInterface } from '@dss/components/dropdown';
import { DssI18nService } from '@dss/components/i18n';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public title = '';

  public theme = 'default';

  public selectedItem: string;

  public languages: Array<DssOptionInterface> = [
    { value: 'pt-BR', viewValue: 'Português' },
    { value: 'es', viewValue: 'Español' },
    { value: 'en', viewValue: 'English' },
  ];

  private _styleId: string | null = null;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    @Optional() private readonly i18n: DssI18nService,
  ) { }

  public onOptionSelected(event: DssOptionInterface): void {
    this.i18n.setLocale(event.value);
  }

  public ngOnInit(): void {
    if (this.i18n !== null) {
      this.selectedItem = this.i18n.currentLocale;
    }

    this.title = this.router.url.includes('/old') ? 'Old' : 'Default';
    this.loadStyle(this.title, this.theme);

    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const title = event.url.includes('/old') ? 'Old' : 'Default';

        if (this.title !== title) {
          this.title = title;
          this.loadStyle(this.title, this.theme);
        }
      }
    });
  }

  public isPageFullScreen(): boolean {
    const pagesFullScreen = [
      '/header',
      '/menu',
    ];

    return pagesFullScreen.findIndex((page: string) => this.router.url.includes(page)) !== -1;
  }

  public changeTheme(event: any): void {
    this.theme = event.checked ? 'default' : 'dark';

    if (this.theme === 'default') {
      this.renderer.removeClass(this.document.querySelector('body'), 'dss-dark');
    } else {
      this.renderer.addClass(this.document.querySelector('body'), 'dss-dark');
    }

    this.loadStyle(this.title, this.theme);
  }

  private loadStyle(option: string, theme: string): void {
    if (this._styleId) {
      this.document.querySelector(`#${this._styleId}`)
        .remove();
    }

    let href = `${environment.cssUrlPath}assets/css/${theme === 'default' ? '' : `${theme}-`}only-style.min.css`;
    this._styleId = `style-default-theme-${theme}`;

    if (option.toLowerCase() === 'old') {
      href = `${environment.cssUrlPath}assets/css/${theme === 'default' ? '' : `${theme}-`}only-style-old.min.css`;
      this._styleId = `style-old-theme-${theme}`;
    }

    const head = this.document.querySelector('head');
    const style = this.document.createElement('link');
    style.id = this._styleId;
    style.rel = 'stylesheet';
    style.href = href;
    head.appendChild(style);

  }

}
