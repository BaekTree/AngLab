import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // template: '<h2>John Doe</h2>',
    // template: '<h2>{{firstName}}</h2>',//string interpolation
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // styles: ['h2 {            color: blue         }    ']
})

export class UserComponent{
    //properties
    //string interpolation
    firstName = 'John';
    lastName = 'Doe';
    age:number = 30;//number can be ok with string interpolation
    address = {
      street: "50 Main st",
      city: "Boston",
      state: "MA"  
    };

    //TYPE from typescript
    myName: string;
    myLastName : string;
    myAge: number;
    myAddress;

    foo: any;
    hasKids:boolean;
    numArr:number[];
    strArr: string[];
    mixedArr:any[];
    myTuple : [string, number, boolean];
    unusable: void;
    u : undefined;
    n : null;

    //methods
    constructor(){
        // string interpolation
        // console.log("Hello User");
        // this.sayHello();
        // console.log(this.age);
        // this.hasBirthday();
        // console.log(this.age);
        this.myName = "Baek";
        this.myLastName = "JH";
        this.myAge = 28;
        this.myAddress = {
            street : "Pohang",
            city : "Korea",
            state : "Yankee Go Home!"

        }

        this.foo = true;
        this.foo = 30;
        this.foo = "hey!";
        this.hasKids = false;
        this.numArr = [1,2,3,4,5];
        this.strArr = ["hello", "world!"];

        this.mixedArr = ["aebc", 133, true];
        this.myTuple = ["hello", 123, true];


        this.unusable = undefined;
        this.u = undefined;
        this.n = null;

        this.sayHi();
        console.log(this.addNumbers(2,3));

    }

    //string interpolation
    // sayHello(){
    //     console.log(`Hello ${this.firstName}`);
    //     // console.log('Hello' + this.firstName);
    // }

    // hasBirthday(){
    //     this.age += 1;
    // }

    showAge(){
        return this.age += 2;
    }

    // introduce myself
    sayHi(){
        console.log(`hello ${ this.myName }`)
    }

    addNumbers(num1:number, num2:number):number {
        return num1 + num2;
    }
}