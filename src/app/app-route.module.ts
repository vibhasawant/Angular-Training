import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';
import { TodoComponent } from 'src/app/todo/todo.component';
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'calculator',
    component:CalculatorComponent
  },
  {
    path: 'todo',
    component:TodoComponent
  },
  {
    path: 'userdetails',
    component:UserDetailsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouteModule { }
