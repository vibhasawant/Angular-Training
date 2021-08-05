import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRouteModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodoComponent,
    UserDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
