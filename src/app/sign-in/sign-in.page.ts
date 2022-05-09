import { Component, OnInit } from '@angular/core';
import { cfaSignInGoogle } from 'capacitor-firebase-auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signInWithGoogle() {
    cfaSignInGoogle().subscribe(
      (user: firebase.User) => console.log(user)
    )
  }
}
