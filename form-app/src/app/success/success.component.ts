// src/app/success/success.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  standalone: true,
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/form']);
  }
}
