import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

export interface HeroInterface {
  id: number;
  name: string;
}

@Injectable()
export class MockDataService implements InMemoryDbService {
  public createDb(): { heroes: Array<HeroInterface> } {
    const heroes = [
      { id: 1, name: 'Homem Aranha' },
      { id: 2, name: 'Hulk' },
      { id: 3, name: 'Mulher Maravilha' },
      { id: 4, name: 'Batman' },
    ];
    return { heroes };
  }
}
