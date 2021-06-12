import { Component, OnInit } from '@angular/core'
import {firebase} from '@firebase/app'
import {environment} from '../environments/environment'
import { NotificationsService } from './notifications.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private notificationsService: NotificationsService
  ) {}
  
  async ngOnInit() {
    firebase.initializeApp(environment.firebase)
    await this.notificationsService.init()
  }
}
