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
  isCopmany = false
  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation()?.extras);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event) => {
        let myEvent: any = event;
        if (myEvent?.url === "/company") {
          this.scrolled = true;
          this.isCopmany = true

        } else {
          this.isCopmany = false
          this.scrolled = false;
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

  scrolled = false
  numberofscroll: number = 0
  @HostListener("window:scroll", [])

  onWindowScroll() {
    this.numberofscroll = window.pageYOffset;
    if (this.numberofscroll || this.isCopmany) {
      this.scrolled = true
    } else {
      this.scrolled = false
      this.isCopmany = false
    }


  }
  openTSP() {
    window.open('http://192.168.36.68/login', '_blank');
  }
}
