import { Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'join', component: JoinFormComponent },
];
