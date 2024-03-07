import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loginComponent } from './login component';
import { SignComponent } from './sign component ';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:loginComponent},
    {path:'sign',component:SignComponent}
  
];
