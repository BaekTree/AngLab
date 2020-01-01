import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //constructor : 의존성 주입에 사용에 사용하는게 recomand된다.
  constructor() { }//depends on injection...

  users : User[];
  showExtended : boolean = true;
  loaded : boolean = false;
  enableAdd : boolean = false;

  posNeg : boolean = true;

  ngOnInit() {//lifesycle method. 시작되면 자동으로 시작된다. 
    //ngOnInit과 다른 점은 뭐지? 실제 초기하는 여기서 사용.

    // setTimeout(()=>{
      this.users = [
        {
          firstName : 'Baek',
          lastName : 'Joey',
          age : 30,
          address : {
            street : 'phoang',
            city : 'MA',
            state : 'Boston!'
          },
          isActive : true,
          registered : new Date("11/02/2019 10:30:00"),
          hide : false
        },
        {
          firstName : 'Kim',
          lastName : 'Grace',
          age : 7,
          address : {
            street : 'phoang',
            city : 'YongIn',
            state : 'Seoul'
          },
          isActive : false,
          registered : new Date("11/02/2019 10:30:00"),
          hide : true
        },
        {
          firstName : 'So',
          lastName : 'Jordan',
          age : 30,
          address : {
            street : 'USS',
            city : 'Interprise',
            state : 'Startreck?'
          },
          isActive:true,
          registered : new Date("11/02/2019 10:30:00"),
          hide : true
        }
      ]

      

      this.loaded = true;

    // this.addUser({
    //   firstName : "david",
    //   lastName : " BAM",
    // });

    
  }

  addUser(user:User){
    this.users.push(user);
  }
  
  fireEvent(e){
    // console.log("button clicked!");
    console.log(e);
  }

  toggleHide(user : User){
    user.hide = !user.hide;
  }

  togglePosNeg(user : User){
    if(user.hide)
      return 'fa fa-plus'
    else
      return 'fa fa-minus'
    
  }


}
