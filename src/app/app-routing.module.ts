import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Imports...
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'about', component : AboutComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'movie', component : MovieComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
