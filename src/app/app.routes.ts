import { Routes, RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card';
import { WelcomePageComponent } from './welcome-page/welcome-page';

export const routes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'movies', component: MovieCardComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'prefix'}

];
