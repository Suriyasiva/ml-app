import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from '../auth/auth.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ], // use inside this module 
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LayoutModule,
    CommonModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    
  ], // packages, inbuilt modules
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
