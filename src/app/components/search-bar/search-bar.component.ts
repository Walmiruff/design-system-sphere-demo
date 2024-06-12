import { Component } from '@angular/core';

export interface OptionInterface {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBarComponent {
  public options1: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
  ];

  public latestSearches1: Array<OptionInterface> = [
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
  ];

  public filteredOptions1: Array<OptionInterface> | any;

  public options2: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
    { title: 'Four', subtitle: '4' },
  ];

  public filteredOptions2: Array<OptionInterface> | any;

  public options3: Array<OptionInterface> = [
    { title: 'One', subtitle: '1' },
    { title: 'Two', subtitle: '2' },
    { title: 'Three', subtitle: '3' },
    { title: 'Four', subtitle: '4' },
  ];

  public filteredOptions3: Array<OptionInterface> | any;

  public selectedItem3: OptionInterface | any;

  public filter1(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions1 = this.options1.filter((option: OptionInterface) => option.title.toLowerCase().includes(filterValue));
  }

  public filter2(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions2 = this.options2.filter((option: OptionInterface) => option.title.toLowerCase().includes(filterValue));
  }

  public filter3(value: string): void {
    const filterValue = value.toLowerCase();
    this.selectedItem3 = undefined;

    if (filterValue.trim().length > 0) {
      this.filteredOptions3 = this.options3.filter((option: OptionInterface) => option.title.toLowerCase().indexOf(filterValue) === 0);
    } else {
      this.filteredOptions3 = [];
    }
  }
}
