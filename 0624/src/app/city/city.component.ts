import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() cities!: Array<string>;
  placeHolder: string = 'Please enter city name...';
  showDropDown: boolean = false;
  input: string = '';
  filteredCities: Array<string> = [];

  // dropDownList() {
  //   this.showDropDown = !this.showDropDown;
  // }

  filterInput() {
    const filterValue = this.input.toLowerCase().trim();
    if (filterValue) {
      this.filteredCities = this.cities.filter((city) =>
        city.toLowerCase().includes(filterValue)
      );
      this.showDropDown = true;
    } else {
      // this.filteredCities = [];
      this.showDropDown = false;
    }
  }
}

// to test if two way binding works
// testTwoWay() {
//   console.log(this.input);
// }
