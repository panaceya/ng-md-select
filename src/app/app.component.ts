import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {PlayerService} from '../services/player.service';

import {CountryModel} from '../models/country.model';
import {CityModel} from '../models/city.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  countryList: CountryModel[] = [];
  cityList: CityModel[] = [];
  filteredCities: Observable<CityModel>;

  constructor(private formBuilder: FormBuilder,
              private playerService: PlayerService,
  ) {

    this.registerForm = this.formBuilder.group({
      'country': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.loadCountry();
  }

  loadCountry() {
    this.playerService.getCountries().subscribe(
      data => {
        this.countryList = data;
      },
      err => {
        console.log(err);
      });
  }

  changeCountry(country_id) {
    console.log('country_id exec getCities()', country_id);

    this.playerService.getCities(country_id)
      .subscribe(
        data => {
          this.cityList = data;
        },
        err => {
          console.log(err);
        });
  }

  registerFormSubmit() {
    console.log('registerFormSubmit():', this.registerForm.value);
    return false;
  }
}
