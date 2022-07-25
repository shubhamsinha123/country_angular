import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Array<string> = [];
  searchCountry: string = '';
  searchProvince: string = '';
  flagUrl = '';
  countryName = '';
  capital: string = '';
  provinces = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.countries = this.dataService.fetchCountryList();
    this.dataService.fetchCountryDetails(this.countryName, 'capital').subscribe(data => {
      this.capital = data['data'].capital;
    })
  }

  searchCountryChange(event) {
    this.searchCountry = event.target.value
  }

  searchProvinceChange(event) {
    this.searchProvince = event.target.value
  }

  getCountryDetails(countryName) {
    this.dataService.fetchCountryDetails(countryName, 'flag').subscribe(data => {
      this.flagUrl = data['data'].flag;
      this.countryName = data['data'].name;
      this.capital = data['data'].capital;
    })
    
    this.dataService.fetchCountryDetails(countryName, 'states').subscribe(data => {
      this.provinces = []
      data['data'].states.map(province => this.provinces.push(province.name))
    })
  } 
}
