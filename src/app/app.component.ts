import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent implements OnInit{
 
 ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyCTxYE7iPJCzdU8vuSXMTjFAq5qfnXi4Ow",
    authDomain: "ng-recipe-book-fc6cc.firebaseapp.com"
   });
 }

}

