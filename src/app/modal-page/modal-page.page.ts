import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  myParameter: boolean;
  detailsList: any = [];
  constructor(private modalController: ModalController,
    private navParams: NavParams) {
  }
  ionViewWillEnter() {
    this.myParameter = this.navParams.get('aParameter');
    this.detailsList = this.navParams.get('detailsList');
    console.log(this.detailsList);
  }
  async myDismiss() {
    await this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
