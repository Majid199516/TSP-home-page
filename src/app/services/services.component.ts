import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  goToCompany() {
    this.router.navigate(['/company'], { state: { isCompany: "true" } });
  }
}
