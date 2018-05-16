import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//Material Module
import { MaterialModule } from './material/material.module';
//Components
import { HomeComponent } from './home/home.component';
//Services
import { EstadosApiService } from './shared/services/estados-api.service';
import { MunicipioApiService } from './shared/services/municipio-api.service';
//Client Module
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,    
    ToastrModule.forRoot()    
  ], 
  providers: [EstadosApiService, MunicipioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
