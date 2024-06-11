import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { BackendService } from './backend.service';
import { HeroInterface } from './mock-data.service';

const DELAY = 2500;

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
})
export class PageLoaderComponent {
  public theme = 'light';

  public ariaBusy = true;

  public showDefault = false;

  public showVariableText = false;

  public showPercent = false;

  public value = 0;

  public data = [];

  public options = [
    '/page-loader/custom/cards.json',
    '/page-loader/custom/consulting-data.json',
    '/page-loader/custom/investments.json',
    '/page-loader/custom/money-movement.json',
    '/page-loader/custom/savings.json',
    '/page-loader/custom/uploading-verifying-docs.json',
    '/page-loader/custom/vehicles.json',
  ];

  public path: string;

  public showCustom = false;

  private readonly _notifier = new Subject();

  constructor(private readonly _backendService: BackendService, @Inject(DOCUMENT) private readonly _document: Document) {}

  public openPageLoaderDefault(): void {
    this.checkTheme();
    setTimeout(() => (this.showDefault = true));
  }

  public openPageLoaderVariableText(): void {
    this.checkTheme();
    setTimeout(() => (this.showVariableText = true));
  }

  public openPageLoaderPercent(): void {
    this.checkTheme();

    setTimeout(() => {
      this.showPercent = true;
      this.value = 0;

      const loading = interval(100);
      const takeHundredNumbers = loading.pipe(take(100), takeUntil(this._notifier));

      takeHundredNumbers.subscribe((value: number) => {
        this.value += 1;

        if (this.value === 100) {
          this.showPercent = false;
        }
      });
    });
  }

  public openPageLoaderDecorator(): void {
    this.checkTheme();

    this.ariaBusy = true;
    const id = this.data.length === 0 ? 1 : this.data.length + 1;

    this.loadData(id);

    timer(DELAY)
      .pipe(take(1))
      .subscribe(() => {
        const otherId = this.data.length === 0 ? 2 : this.data.length + 2;

        this.loadData(otherId);
      });
  }

  public openPageLoaderCustom(): void {
    this.checkTheme();
    setTimeout(() => (this.showCustom = true));
  }

  @HostListener('document:keyup.esc') public onKeyup(): void {
    this.showDefault = false;
    this.showVariableText = false;
    this.showPercent = false;
    this.showCustom = false;

    this._notifier.next();
  }

  private loadData(id: number): void {
    if (this.data.length < 4) {
      this._backendService
        .getHeroes(id)
        .pipe()
        .subscribe((response: HeroInterface) => {
          this.data.push(response);

          if (this.data.length === 2 || this.data.length === 4) {
            this.ariaBusy = false;
          }
        });
    }
  }

  private checkTheme(): void {
    this.theme = this._document.body.classList.contains('dss-dark') ? 'dark' : 'light';
  }
}
