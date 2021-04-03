import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private countryListAPI = 'http://vocab.nic.in/rest.php/country/json';
  private baseUrl = 'https://countriesnow.space/api/v0.1/countries/';
  private endpoints = {
    flag: 'flag/images',
    capital: 'capital',
    states: 'states',
    cities: 'state/cities',
  }

  constructor(private http: HttpClient) { }

  httpGetData(apiUrl) {
    return this.http.get(apiUrl);
  }

  httpPostData(apiUrl, data) {
    return this.http.post(apiUrl, data);
  }

  fetchCountryList(): Array<string> {
    const countries: Array<string> = [];
    this.httpGetData(this.countryListAPI).subscribe(data => {
      if (data['countries']) {
        data['countries'].map(country => {
          countries.push(country.country.country_name);
        })
      }
    });
    return countries;
  }

  fetchCountryDetails(countryName, dataPoint) {
    return this.httpPostData(`${this.baseUrl}${this.endpoints[dataPoint]}`, { country: countryName });
  }

  fetchCitiesList(countryName, province) {
    const cities = [];
    this.httpPostData(`${this.baseUrl}${this.endpoints.cities}`, { country: countryName, state: province }).subscribe(data => {
      if (data['data']) {
        data['data'].map(city => {
          cities.push(city);
        })
      }
    });
    return cities;
  }
}
