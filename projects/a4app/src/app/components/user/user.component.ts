import { Component, OnInit } from '@angular/core';

// This is the decorator for the user comonent,
// adding metadata such as the html selector <app-user>
// the location of the HTML file for it, and it's CSS.
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// This is the class that is the User Component
export class UserComponent implements OnInit {
  name:string = "Dirk Dunn"
  age:number;
  email:string;
  // This outlines the structure of how the object needs to be
  // including the name and datatype
  address:{
    street:string,
    city:string,
    state:string
  };

  constructor() {
    console.log("Constructor ran!!!");
  }

  // Lifecycle method, on init
  ngOnInit() {
    this.age = 26;
    this.address = {
      street: "50 main st.",
      city: "Boston",
      state: "MA"
    }

    console.log("Running ngOnInit");
  }

}
