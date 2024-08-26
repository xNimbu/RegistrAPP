import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private toastController: ToastController) {}

  async diHola() {
    const toast = await this.toastController.create({
      message: 'Hola',
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }

}
