import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full", // 完全匹配
    data: {
      animation: "one"
    }
  },
  {
    path: "about/:title",
    component: AboutComponent,
    canActivate:[AuthGuardGuard],
    data: {
      animation: "two"
    }
  },
  {
    path: "news",
    component: NewsComponent,
    data: {
      animation: "three"
    },
    children:[
      {
        path:"company",
        component:CompanyComponent,
        outlet:'company'
      },
      {
        path:"industry",
        component:IndustryComponent,
        outlet: 'industry'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
