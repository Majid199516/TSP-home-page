import { Component } from '@angular/core';
import { Router, } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  constructor(private router: Router) { }
  goToCompany() {
    this.router.navigate(['/company']);
  }
}
