import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DssPageLoaderDecorator } from '@dss/components/loader';

import { HeroInterface } from './mock-data.service';

@Injectable()
export class BackendService {
  constructor(private readonly http: HttpClient) {}

  @DssPageLoaderDecorator('page-loader-with-decorator') public getHeroes(id: number): Observable<HeroInterface> {
    return this.http.get<HeroInterface>(`api/heroes/${id}`);
  }
}
