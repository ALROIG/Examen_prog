import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  constructor(public http: HttpClient) { 

  }


  verInfo(){
    return this.http.get('https://kitsu.io/api/edge')

  }

}
