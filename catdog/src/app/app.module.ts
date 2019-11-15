import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { ShowcatsComponent } from './showcats/showcats.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DoggomanagerComponent } from './doggomanager/doggomanager.component';  

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    ShowcatsComponent,
    DoggomanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
