import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage implements OnInit {

  formNuevoUsuario : FormGroup;

  constructor(
    private fb: FormBuilder,
    public dbUsuarios: FireStoreService
  ) { }

  ngOnInit() {
    this.formNuevoUsuario = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      region: ['', [Validators.required, Validators.minLength(3)]],
      comuna: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  crearUsuario(){
    console.log(this.formNuevoUsuario.value);
    this.dbUsuarios.agregarUsuario(this.formNuevoUsuario.value)
  }

}
