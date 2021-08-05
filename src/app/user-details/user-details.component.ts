import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: any = [
    {
      name: 'Vibha Sawant',
      age:26,
      gender: "Female"
    }
  ];
  name: string = '';
  age: number = 0;
  gender:string = '';
  constructor() {
  }


  ngOnInit(): void {
  }

  addUserToList() {
    let user = {
      name: this.name,
      age: this.age,
      gender: this.gender
    };
    this.userDetails.push(user)
    this.name = '';
    this.age = 0;
    this.gender = '';
    }
}