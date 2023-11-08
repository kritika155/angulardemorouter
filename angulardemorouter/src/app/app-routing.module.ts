import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurCompanyComponent } from './about-us/our-company/our-company.component';
import { OurEmployeesComponent } from './about-us/our-employees/our-employees.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'aboutus',
    children: [
      {
        path: '',
        component: AboutUsComponent,
      },
      {
        path: 'our_employees',
        component: OurEmployeesComponent,
      },
      {
        path: 'our_company',
        component: OurCompanyComponent,
      },
    ],
  },
  { path: 'contactus', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
