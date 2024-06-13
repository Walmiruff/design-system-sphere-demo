import { Component, OnInit } from '@angular/core';
import { routes } from './components-routing.module';
import { StateService } from '../state.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public routes: any;
  public ativo: boolean = false;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.routes = routes[0].children?.sort((a, b) => (a.path || '').localeCompare(b.path || ''));
    this.stateService.switchStateSideBar.subscribe(v => this.ativo = v)
  }
}