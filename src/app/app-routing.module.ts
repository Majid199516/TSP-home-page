import { ServicesComponent } from './services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionsComponent } from './questions/questions.component';
import { CompanyComponent } from './services/company/company.component';
import { Service2Component } from './services/service2/service2.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesMenuComponent } from './services/services-menu/services-menu.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'company', component: CompanyComponent, data: { isCompany: true } },
  { path: 'direct-signUp', component: Service2Component },
  { path: 'service-menu', component: ServicesMenuComponent },
  { path: 'connecting-with-taksa', component: ServicesComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
