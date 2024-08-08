import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {FormComponent} from "./form/form.component";
// import {SuccessComponent} from "./success/success.component";
import {AppModule} from './app.module'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-app';
}
