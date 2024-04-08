import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import { AsconeComponent } from './landing-pages/ascone/ascone.component';
import { HomeComponent } from './landing-pages/home/home.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'landing-pages', component: LandingPagesComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'ascone', component: AsconeComponent }
    ]
  }
];
