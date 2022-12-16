import { Injectable } from '@angular/core';
import { AngularFirestore } from '@Angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(
    public db: AngularFirestore
  ) { }

  agregarMisJuegos(data: any) {
    const collection = this.db.collection("mis-juegos");
    return collection.doc().set(data);
  }

  getMisJuegos(){
    const collection = this.db.collection("mis-juegos");
    return collection.valueChanges({ idField: 'id'})
  }

  eliminarMisJuegos(id: any){
    const collection = this.db.collection("mis-juegos");
    return collection.doc(id).delete()
  }

  agregarUsuario(data: any) {
    const collection = this.db.collection("usuario");
    return collection.doc().set(data);
  }

  getUsuario(){
    const collection = this.db.collection("usuario");
    return collection.valueChanges({ idField: 'id'})
  }

  getUnUsuario(id: any){
    const collection = this.db.collection("usuario");
    return collection.doc(id).valueChanges({ idField: 'id'})
  }

  editarUsuario(id: any, data: any){
    const collection = this.db.collection("usuario");
    return collection.doc(id).update(data)
  }

  eliminarUsuario(id: any){
    const collection = this.db.collection("usuario");
    return collection.doc(id).delete()
  }
}