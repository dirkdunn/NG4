import { Component, OnInit } from '@angular/core';
import { Address } from '../component_interfaces';

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
  address:Address;
  hobbies:string[];
  hello:any;
  // This outlines the structure of how the object needs to be
  // including the name and datatype


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
    this.hobbies = ['Write Code', 'Playing Music']
    this.hello ='Hello, I can be any data type.'

    console.log("Running ngOnInit");
  }

}
