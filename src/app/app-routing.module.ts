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
    component: HomeComponent,
    data : {
      animation:'home'
    }
  },
  { 
    path: 'calculator', 
    component: CalculatorComponent,
    data : {
      animation:'calculator'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data : {
      animation:'about'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data : {
      animation:'contact'
    }
  },
  {
    path: 'privacy-and-terms',
    component: PrivacyPolicyComponent,
    data : {
      animation:'privacy-and-terms'
    }
  },
  {
    path: 'premium-charts',
    component: ChartComponent,
    data : {
      animation:'premium-charts'
    }
  },
  {
    path: 'business-development-tools',
    component: ToolsForVleComponent,
    data : {
      animation:'business-development-tools'
    }
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    data : {
      animation:'feedback'
    }
  },
  { 
    path: '**', 
    component:  PageNotFoundComponent,
    data : {
      animation:'**'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
