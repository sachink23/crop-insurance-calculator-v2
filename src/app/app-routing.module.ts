import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FeaturedProductsComponent } from './components/pages/featured-products/featured-products.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';


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
    path: 'blog', 
    component: BlogComponent 
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
    path: 'affiliate-shop',
    component: FeaturedProductsComponent
  },
  {
    path: 'privacy-and-terms',
    component: PrivacyPolicyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
