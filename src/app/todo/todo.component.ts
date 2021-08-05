import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list:any = [];
  listItem = "";
  constructor() { }

  ngOnInit(): void {
  }

  addtodo(){
    this.list.push(this.listItem);
    this.listItem = "";
  }
}
