import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DELAY = 3000;
const FAST = 300;

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
})
export class ContentLoaderComponent {
  public theme = 'light';

  public showDefault = false;

  public showFeedbackError = false;

  public showFeedbackSuccess = false;

  public isError = false;

  public isSuccess = false;

  public bodyAccordion: string | null = null;

  public showLoadingSubmitting = false;

  private readonly _notifier = new Subject();

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public openAccordion(): void {
    this.checkTheme();

    this.showDefault = true;

    timer(DELAY)
      .pipe(takeUntil(this._notifier))
      .subscribe(() => {
        this.bodyAccordion = 'Conteúdo carregado dinamicamente!';
        this.showDefault = false;
      });
  }

  public closeAccordion(): void {
    this._notifier.next();
    this.showDefault = false;
    this.bodyAccordion = null;
  }

  public feedback(type: string): void {
    if (type === 'error' && !this.showFeedbackError) {
      this.showFeedbackError = true;
      this.isError = false;

      timer(DELAY)
        .pipe(takeUntil(this._notifier))
        .subscribe(() => {
          this.isError = true;
        });
    } else if (type === 'success' && !this.showFeedbackSuccess) {
      this.showFeedbackSuccess = true;
      this.isSuccess = false;

      timer(DELAY)
        .pipe(takeUntil(this._notifier))
        .subscribe(() => {
          this.isSuccess = true;
        });
    }
  }

  public clear(type: string): void {
    if (type === 'error') {
      this.showFeedbackError = false;
      this.isError = false;
    } else if (type === 'success') {
      this.showFeedbackSuccess = false;
      this.isSuccess = false;
    }

    this._notifier.next();
  }

  public submit(): void {
    this.showLoadingSubmitting = true;

    timer(FAST)
      .pipe(takeUntil(this._notifier))
      .subscribe(() => {
        this.showLoadingSubmitting = false;
      });
  }

  private checkTheme(): void {
    this.theme = this._document.body.classList.contains('dss-dark') ? 'dark' : 'light';
  }
}
