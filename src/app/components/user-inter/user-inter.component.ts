import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user-inter',
  templateUrl: './user-inter.component.html',
  styleUrls: ['./user-inter.component.css']
})
export class UserInterComponent {

  //properties
  //without user interface
  // user: {
  //   firstName : string,
  //   lastName : string,
  //   age : number,
  //   address: {
  //     street : string,
  //     city : string,
  //     state : string
  //   }
  // }

  user : User;//with interface

  constructor() {
    this.user = {
      firstName : 'Baek',
      lastName : 'Joey',
      age : 30,
      address : {
        street : 'phoang',
        city : 'MA',
        state : 'Boston!'
      }
    }
   }

  

}


// interface User{
//   firstName : string,
//   lastName : string,
//   age : number,
//   address: {
//      street : string,
//       city : string,
//       state : string
//   }
// }