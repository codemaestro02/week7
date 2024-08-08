import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countries: any[] = [];

  constructor(private formService: FormService, private http: HttpClient) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.http.get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe(data => {
        this.countries = data.map(country => ({ name: country.name.common }));
      });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.formService.submitForm(form.value).subscribe();
    }
  }
}
