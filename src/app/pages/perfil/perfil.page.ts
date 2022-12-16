import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;
  idUsuario: any;

  constructor(
    public dbUsuarios: FireStoreService
  ) { }

  async ngOnInit() {
    this.idUsuario = localStorage.getItem('id')

    this.dbUsuarios.getUnUsuario(this.idUsuario).subscribe((data) => {
      this.usuario = data
    })
  }

}
