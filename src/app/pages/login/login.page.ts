import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;

  constructor(
    public dbUsuarios: FireStoreService,
    public router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      userName: [''],
      password: [''],
    })
  }

  validarLogin(){
    let userName = this.formLogin.value.userName;
    let password = this.formLogin.value.password;

    var expresion= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    this.dbUsuarios.getUsuario().subscribe((data: any) => {
      data.forEach((usuario: any) => {
        if (userName == usuario.userName && password == usuario.password){
          localStorage.setItem("id", usuario.id)
          this.router.navigate(['home'])
        }
        else if ( userName ==="" || password===""  ) { 
          document.getElementById("demo").innerHTML = "Todos los campos son obligatorios.";
          return false
        }
        else if (!expresion.test(password.value)){ 
          document.getElementById("demo").innerHTML = "Usuario o contraseña incorrectos. Reintentelo.";
          return false
        }
      })
    })
  }
  ionViewDidEnter(){
    localStorage.clear()
  }
}
