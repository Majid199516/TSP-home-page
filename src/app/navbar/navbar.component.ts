import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state.isCompany);
  }
  scrolled = false
  numberofscroll: number = 0
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.numberofscroll = window.pageYOffset;


    if (this.numberofscroll) {
      this.scrolled = true
    } else {
      this.scrolled = false
    }


  }
  openTSP() {
    window.open('http://192.168.36.68/login', '_blank');
  }
}
