import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { CompanyComponent } from './services/company/company.component';
import { Service2Component } from './services/service2/service2.component';
import { ServicesMenuComponent } from './services/services-menu/services-menu.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import {
  IgxCarouselModule,
  IgxIconModule,
  IgxSelectModule,
  IgxButtonModule,
  IgxCardModule,
} from 'igniteui-angular';
import { IgxGridModule } from 'igniteui-angular';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    QuestionsComponent,
    FooterComponent,
    ServicesComponent,
    CompanyComponent,
    Service2Component,
    ServicesMenuComponent,
    ImageSliderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    IgxCarouselModule,
    IgxIconModule,
    IgxSelectModule,
    IgxButtonModule,
    IgxCardModule,
  ],
  exports: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
