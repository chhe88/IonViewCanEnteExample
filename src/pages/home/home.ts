import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs";
import {NextPage} from "../next/next";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage = NextPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return Observable.of(true).delay(5000).toPromise();
  }

}
