import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  countryName: string = '';
  provinces: Array<string> = [];
  searchText: string = '';

  @Input() set provinceList(val) {
    this.provinces = val;
  }

  get provinceList(): Array<string> {
    return this.provinces
  }

  @Input() set selectedCountry(val) {
    this.countryName = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

  searchTextChange(event) {
    this.searchText = event.target.value
  }

}
