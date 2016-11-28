import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { Page3Component } from './page3/page3.component';
 
@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents,
        Page3Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }