import { Component, OnInit } from '@angular/core';
import { routes } from './components-routing.module';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public routes: any;
  constructor() { }

  ngOnInit(): void {
    this.routes = routes[0].children?.sort((a, b) => (a.path || '').localeCompare(b.path || ''));
  }
}