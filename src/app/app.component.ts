import { AfterViewInit, Component, OnInit } from '@angular/core'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { firebase } from '@firebase/app'
import { Platform } from '@ionic/angular'
import { environment } from '../environments/environment'
import { NotificationsService } from './notifications.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private notificationsService: NotificationsService,
    private platform: Platform
  ) { }

  async ngOnInit() {
    firebase.initializeApp(environment.firebase)
    // await this.notificationsService.init()
  }

  ngAfterViewInit() {
    // this.platform.ready().then(async () => {
    //   await this.notificationsService.requestPermission()
    // })
  }
}
