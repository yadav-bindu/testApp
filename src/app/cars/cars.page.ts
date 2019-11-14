import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarPageServiceProvider } from '../../Providers/cars.page.service';
import { HttpClient } from '@angular/common/http';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  carsList: any = [];
  countList: any;
  DetailItemList: any = [];
  title :string = "cars";

  constructor(public router: Router, public carProvider: CarPageServiceProvider, public http: HttpClient, public modalController: ModalController) { }

  ngOnInit() {
    this.getCharacters(this.title);
  }
  backButton() {
    this.router.navigateByUrl('/home');
  }
  getCharacters(title) {
    this.carProvider.getCarList(title)
      .then(data => {
        this.carsList = data;
        console.log(this.carsList);
        this.countList = this.carsList.length;
        console.log(this.countList);
      });
  }
  getDetailsView(codigo,title) {
    console.log(codigo,title);
    this.carProvider.getDetails(codigo,title);

  }
}
