import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { LoginService } from 'src/app/Servicios/login.service';

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
    public vl: LoginService,
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      userName: [''],
      password: [''],
    })
  }

  login(){
    let res = this.vl.validarLogin(this.formLogin.value)
    if (!res){
      localStorage.clear()
    }
    else{
      this.router.navigate(['home'])
    }
  }

  ionViewDidEnter(){
    localStorage.clear()
  }
}
