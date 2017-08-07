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
    this.email = "dirkdunn1@gmail.com"
    this.hello ='Hello, I can be any data type.'

    console.log("Running ngOnInit");
  }

  // My own method that I am using for an event
  onClick(e){
    console.log('Event Triggered!');
    console.log("e: ", e)

    // This will also update the data binding
    this.name="Dirk The Man!!!"

  }

  addHobby(hobby){
    console.log('hobby is the DOM node of the hobby input: ', hobby)
    // Will add to the list of hobbies real time in the browser
    this.hobbies.unshift(hobby.value);
    hobby.value = "";

    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i,1)
  }

  updateHobby(i){

  }

}
