import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui-elements/navbar/navbar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FooterComponent } from './components/ui-elements/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FeaturedProductsComponent } from './components/pages/featured-products/featured-products.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TestimonialsComponent } from './components/ui-elements/testimonials/testimonials.component';
import { HomepageHeaderComponent } from './components/ui-elements/homepage-header/homepage-header.component';
import { FeaturesComponent } from './components/ui-elements/features/features.component';
import { AchievementStatsComponent } from './components/ui-elements/achievement-stats/achievement-stats.component';
import { TeamComponent } from './components/ui-elements/team/team.component';
import { HighlightComponent } from './components/ui-elements/highlight/highlight.component';
import { BlogPostComponent } from './components/ui-elements/blog-post/blog-post.component';
import { PwaUpdateService } from './services/update/pwa-update.service';
import { SeoService } from './services/seo/seo.service';
import { FollowOurBlogComponent } from './components/ui-elements/follow-our-blog/follow-our-blog.component';
import { CalculatorService } from './services/calculator/calculator.service';
import { BlogService } from './services/blog/blog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VleModeComponent } from './components/calculator/modes/vle-mode/vle-mode.component';
import { FarmerModeComponent } from './components/calculator/modes/farmer-mode/farmer-mode.component';
import { Seasons } from './data/seasons/seasons';
import { SetupComponent } from './components/calculator/setup/setup.component';
import { CalculatorSetupService } from './services/calculator/setup/calculator-setup.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { CalculatorHeaderComponent } from './components/calculator/calculator-header/calculator-header.component';
import { BasicComponent } from './components/calculator/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    FeaturedProductsComponent,
    CalculatorComponent,
    PrivacyPolicyComponent,
    TestimonialsComponent,
    HomepageHeaderComponent,
    FeaturesComponent,
    AchievementStatsComponent,
    TeamComponent,
    HighlightComponent,
    BlogPostComponent,
    FollowOurBlogComponent,
    VleModeComponent,
    FarmerModeComponent,
    SetupComponent,
    CalculatorHeaderComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,

    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Title,
    Meta,
    CalculatorService,
    BlogService,
    PwaUpdateService,
    SeoService,
    CalculatorSetupService,
    LocalStorageService,
    /*Seasons */
    Seasons,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
