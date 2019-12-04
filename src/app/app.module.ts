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
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TestimonialsComponent } from './components/ui-elements/testimonials/testimonials.component';
import { HomepageHeaderComponent } from './components/ui-elements/homepage-header/homepage-header.component';
import { FeaturesComponent } from './components/ui-elements/features/features.component';
import { AchievementStatsComponent } from './components/ui-elements/achievement-stats/achievement-stats.component';
import { TeamComponent } from './components/ui-elements/team/team.component';
import { HighlightComponent } from './components/ui-elements/highlight/highlight.component';
import { PwaUpdateService } from './services/update/pwa-update.service';
import { SeoService } from './services/seo/seo.service';
import { CalculatorService } from './services/calculator/calculator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Seasons } from './data/seasons/seasons';
import { SetupComponent } from './components/calculator/setup/setup.component';
import { CalculatorSetupService } from './services/calculator/setup/calculator-setup.service';
import { BasicComponent } from './components/calculator/basic/basic.component';
import { ChartComponent } from './components/pages/chart/chart.component';
import { ToolsForVleComponent } from './components/pages/tools-for-vle/tools-for-vle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CalculatorComponent,
    PrivacyPolicyComponent,
    TestimonialsComponent,
    HomepageHeaderComponent,
    FeaturesComponent,
    AchievementStatsComponent,
    TeamComponent,
    HighlightComponent,
    SetupComponent,
    BasicComponent,
    ChartComponent,
    ToolsForVleComponent,
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
    PwaUpdateService,
    SeoService,
    CalculatorSetupService,
    Seasons,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
