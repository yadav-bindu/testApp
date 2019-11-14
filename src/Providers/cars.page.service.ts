import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../app/modal-page/modal-page.page';

@Injectable()

export class CarPageServiceProvider {
    list: any = [];
    url: string;
    title: string;
    DetailItemList: any = [];
    constructor(public http: HttpClient, public modalController: ModalController) { }
    public getCarList(title) {
        if (title == 'cars') {
            this.url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
        }
        else if (title == 'motor') {
            this.url = `https://parallelum.com.br/fipe/api/v1/motos/marcas`;
        }
        else if (title == 'caminhoms') {
            this.url = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`
        }

        //let url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        return new Promise(resolve => {
            this.http.get(this.url).subscribe(data => {
                resolve(data);
                this.list = data;
                console.log(this.list);
            }, err => {
                console.log(err);
            });
        });
    }
    getDetails(codigo, title) {
        if (title == 'cars') {
            this.url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos`;
        }
        else if (title == 'motor') {
            this.url = `https://parallelum.com.br/fipe/api/v1/motos/marcas/${codigo}/modelos`;
        }
        else if (title == 'caminhoms') {
            this.url = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${codigo}/modelos`
        }

        return new Promise(resolve => {
            this.http.get(this.url).subscribe(data => {
                resolve(data);
                this.DetailItemList = data;
                console.log(this.DetailItemList);
                this.openModal();
            }, err => {
                console.log(err);
            });
        });
    }
    async openModal() {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ModalPagePage,
                componentProps: {
                    aParameter: true,
                    detailsList: this.DetailItemList
                }
            });

        await modal.present();
    }

}