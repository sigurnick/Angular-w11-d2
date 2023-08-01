import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/login',  pathMatch:'full'},
  { path: 'login', component:LogInComponent},
  { path: 'singin', component:SingInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
