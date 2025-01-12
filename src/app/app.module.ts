import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { HowItWorksComponent } from './components/home/how-it-works/how-it-works.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { CtaComponent } from './components/home/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
