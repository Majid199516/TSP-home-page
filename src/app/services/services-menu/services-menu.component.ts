import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.component.css']
})
export class ServicesMenuComponent {
  constructor(private router: Router) { }
  goToCompany() {
    this.router.navigate(['/company']);
  }
}

