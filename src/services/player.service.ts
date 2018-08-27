import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryModel} from '../models/country.model';
import {CityModel} from '../models/city.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {
  }

  getCities(country_id) {
    return this.http.get<CityModel[]>('/assets/city-' + country_id + '.json');
  }

  getCountries() {
    return this.http.get<CountryModel[]>('/assets/country.json');
  }

}
