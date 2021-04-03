import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  countryName: string = '';
  province: string = '';
  cities: Array<string> = [];
  searchText: string = '';
  flagUrl: string = '';
  capital: string = '';

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.countryName = params['country'];
      this.province = params['province'];
      this.cities = this.dataService.fetchCitiesList(this.countryName, this.province);
      this.dataService.fetchCountryDetails(this.countryName, 'flag').subscribe(data => {
        this.flagUrl = data['data'].flag;
      })
      this.dataService.fetchCountryDetails(this.countryName, 'capital').subscribe(data => {
        this.capital = data['data'].capital;
      })
      console.log('cities: ', this.cities)
    })
  }

  searchTextChange(event) {
    this.searchText = event.target.value
  }

}
