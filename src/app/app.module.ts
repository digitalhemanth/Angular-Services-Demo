import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyDataService } from "./my-data.service";
import { Temp1Component } from './temp1/temp1.component';
import { Temp2Component } from './temp2/temp2.component';



@NgModule({
  declarations: [
    AppComponent,
    Temp1Component,
    Temp2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'temp1',
        component:Temp1Component
      },
      {
        path:'temp2',
        component:Temp2Component
      }
    ])  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
