import { Component, OnInit } from '@angular/core';
import { routes } from './components-routing.module';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public routes = routes[0].children;
  constructor() { }

  ngOnInit(): void {
    console.log('routes', this.routes);
  }
}