import { Component, OnInit } from '@angular/core';
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
  provinces = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.countries = this.dataService.fetchCountryList();
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
      console.log('data: ', this.flagUrl);
    })
    
    this.dataService.fetchCountryDetails(countryName, 'states').subscribe(data => {
      data['data'].states.map(province => this.provinces.push(province.name))
      console.log('data: ', this.provinces);
    })
  } 
}
