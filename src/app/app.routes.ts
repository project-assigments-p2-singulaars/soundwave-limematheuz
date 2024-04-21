import { Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { JoinFormComponent } from './components/join-form/join-form.component';

export const routes: Routes = [
  { path: 'discover', component: DiscoverComponent },
  { path: 'join', component: JoinFormComponent },
];
