import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { JuegosPageRoutingModule } from './juegos-routing.module';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos = []
    constructor(
      public navCtrl: NavController,
      public dbMisJuegos: FireStoreService,
      private http:HttpClient) { 

  }

  ngOnInit() {
    this.http.get<any>('https://api.rawg.io/api/games?key=36214cc580e7493fa9f5b2d0792347c3')
    .subscribe(res => {
      this.juegos = res.results;
    })
  }
  
  agregarMisJuegos(juego: any) {
    const id_user = localStorage.getItem('id');

    let informacion = {
      'idUsuario': id_user,
      'id': juego.id,
      'nombre': juego.name,
      'img': juego.background_image,
    }
    this.dbMisJuegos.agregarMisJuegos(informacion)
  }
}