import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  openTSP() {
    window.open('http://192.168.36.68/login', '_blank');
  }
}
