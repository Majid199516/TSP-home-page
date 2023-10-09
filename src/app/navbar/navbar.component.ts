import { Component, HostListener, OnInit, inject, Input } from '@angular/core';
import { Route, Router, ParamMap, ActivatedRoute, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // name;
  isScrolled = false
  isCompany = false
  numberofscroll: number = 0
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event) => {
        let myEvent: any = event;
        if (myEvent?.url === "/company") {
          this.isCompany = true
          console.log('if', typeof this.isCompany, typeof this.isScrolled);
        }
        else {
          // this.isScrolled = false;
          this.isCompany = false;
          // console.log('else', this.isCompany, this.isScrolled);

        }
      });

  }
  ngOnInit() {
    // this.name = history.state.name;
    // console.log(this.name);
    // if (this.name == 'company') {
    //   this.scrolled = true
    // }
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    this.numberofscroll = window.pageYOffset;
    if (this.numberofscroll) {
      this.isScrolled = true
    }
    // else if (this.numberofscroll === 0 && this.isCompany) {
    //   this.isScrolled = false
    // }
    else {
      this.isScrolled = false
      // this.isCompany = false
    }



  }
  openTSP() {
    window.open('http://192.168.36.68/login', '_blank');
  }
}
