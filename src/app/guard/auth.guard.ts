import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../Servicios/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    const token = localStorage.getItem('id');
    if(token == null){
      this.router.navigate(['login'])
      return false
    }
    else{
      return true;
    }
    
  }
  
}
