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
  showExtended : boolean = false;
  loaded : boolean = false;
  enableAdd : boolean = true;
  currentClasses={};
  currentStyles={};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive : true
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive : false
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive:true
        }
      ]

      

      this.loaded = true;
    // },2000);

    // console.log("init...")
    
    
    // this.showExtended = false;
    this.addUser({
      firstName : "david",
      lastName : " BAM",
      // age : 99,
      // address : {
      //   street : " B",
      //   city : "C",
      //   state : "A"
        
      // }
    });
    this.setCurrentClasses();
    this.setCurrentStyles();

    
  }

  addUser(user:User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success' : this.enableAdd,
      'big-text' : this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '100px',
      'font-size' : this.showExtended? '' : '40px'
    }
  }

}
