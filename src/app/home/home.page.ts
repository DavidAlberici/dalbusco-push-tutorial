import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  constructor() {}

}
