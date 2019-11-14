import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {ModalPagePage } from '../modal-page/modal-page.page';
import { CarPageServiceProvider } from '../../Providers/cars.page.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.page.html',
  styleUrls: ['./motos.page.scss'],
})
export class MotosPage implements OnInit {
  motosList : any = [];
  DetailItemList: any = [];
  title :string = "motor";
  constructor(public carProvider: CarPageServiceProvider,public router: Router,public http: HttpClient,public modalController : ModalController) { }

  ngOnInit() {
    this.getMotos(this.title);
  }
  backButton() {
    this.router.navigateByUrl('/home');
  }
  getMotos(title){
    this.carProvider.getCarList(title).then(data => {
      this.motosList =  data;
      console.log(this.motosList);
    });
  }
  getDetailsView(codigo,title) {
    console.log(codigo,title);
    this.carProvider.getDetails(codigo,title);
  }
}
