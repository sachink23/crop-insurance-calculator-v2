import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ChartComponent } from './components/pages/chart/chart.component';
import { ToolsForVleComponent } from './components/pages/tools-for-vle/tools-for-vle.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'calculator', 
    component: CalculatorComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'privacy-and-terms',
    component: PrivacyPolicyComponent
  },
  {
    path: 'premium-charts',
    component: ChartComponent
  },
  {
    path: 'business-development-tools',
    component: ToolsForVleComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  { path: '**', component:  PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
