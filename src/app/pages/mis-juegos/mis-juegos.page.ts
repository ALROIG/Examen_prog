import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';

@Component({
  selector: 'app-mis-juegos',
  templateUrl: './mis-juegos.page.html',
  styleUrls: ['./mis-juegos.page.scss'],
})
export class MisJuegosPage implements OnInit {

  juegos: any[]=[];
  idUsuario: any;

  constructor(
    public dbMisJuegos: FireStoreService
  ) {}

  async ngOnInit() {
    this.idUsuario = localStorage.getItem('id');

    this.dbMisJuegos.getMisJuegos().subscribe((data: any) => {
      data.forEach((juegos: any) => {
        if (juegos.idUsuario==this.idUsuario){
          this.juegos.push(juegos);
        }
      })
    });
  }

  eliminarMisJuegos(id: string){
    this.juegos = []
    
    this.dbMisJuegos.eliminarMisJuegos(id)
  }
}
