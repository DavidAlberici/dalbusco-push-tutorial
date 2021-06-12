import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { mergeMapTo, take } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  token: string
  payload

  constructor(
    private notificationService: NotificationsService,
    private afMessaging: AngularFireMessaging
  ) {}

  ngOnInit() {
    // this.notificationService.getNotificationObservable()
    //   .pipe(take(10))
    //   .subscribe(payload => console.log(payload))

    // this.afMessaging.messages.subscribe(payload => console.log(payload))
  }

  requestPermission() {
    this.afMessaging.requestPermission
    .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { 
          console.log('Permission granted! Save to the server!', token); 
          this.token = token;
        },
        (error) => { console.error(error); },  
      );
  }

  listen() {
    console.log("Listening...")
    this.afMessaging.messages
      .subscribe((payload) => { 
        console.log(payload); 
        this.payload = payload
      });
  }

  public messages = [
    {
      title: "Estático",
      content: "Este mensaje está siempre presente"
    }
  ]

  addMessage() {
    this.messages.push(
      {
        title: "Agregado con boton",
        content: "Este mensaje fue agregado pulsando el boton"
      })
  }

}
