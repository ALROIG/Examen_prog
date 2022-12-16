import { Injectable } from '@angular/core';
import { FireStoreService } from './fire-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarios: any[]

  constructor(
    public dbUsuarios: FireStoreService,
  ) { 
    this.dbUsuarios.getUsuario().subscribe((data)=>{
      this.usuarios = data
    })
  }

  validarLogin(form: any){
    return this.usuarios.some((data)=>{
      localStorage.setItem('id', data.id)
      return form.userName === data.userName && form.password === data.password
    })
  }
}
