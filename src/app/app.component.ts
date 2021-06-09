import { Component, OnInit } from '@angular/core'
import {firebase} from '@firebase/app'
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  
  async ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
}
