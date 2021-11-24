import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutingModule } from './auth/auth.routing';


import { NofoundComponent } from './nofound/nofound.component';
import { pagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', component: NofoundComponent }
  
]




@NgModule({
  declarations: [],
  imports:[
    RouterModule.forRoot(routes),
    pagesRoutingModule,
    authRoutingModule
     
  ] ,
  exports:[RouterModule]

  
})
export class AppRoutingModule { }
