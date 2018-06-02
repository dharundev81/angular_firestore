import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword("dharundev81@gmail.com","1702sdbdev")
    .then((success) => {
      console.log(success);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
