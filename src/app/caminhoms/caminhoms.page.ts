import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {ModalPagePage } from '../modal-page/modal-page.page';
import { CarPageServiceProvider } from '../../Providers/cars.page.service';

@Component({
  selector: 'app-caminhoms',
  templateUrl: './caminhoms.page.html',
  styleUrls: ['./caminhoms.page.scss'],
})
export class CaminhomsPage implements OnInit {
  capinhoms: any = [];
  DetailItemList: any = [];
  title :string = "caminhoms";
  constructor(public carProvider: CarPageServiceProvider,public router: Router,public http: HttpClient,public modalController : ModalController) { }

  ngOnInit() {
    this.getCaminhoms(this.title);
  }
  backButton() {
    this.router.navigateByUrl('/home');
  }
  getCaminhoms(title) {
    this.carProvider.getCarList(title).then(data => {
      this.capinhoms = data;
      console.log(this.capinhoms);
    })
  }
  getDetailsView(codigo,title) {
    console.log(codigo,title);
    this.carProvider.getDetails(codigo,title);
  }
}
