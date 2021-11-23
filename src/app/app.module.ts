import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NofoundComponent } from './nofound/nofound.component';







@NgModule({
  declarations: [
    AppComponent,
    NofoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
