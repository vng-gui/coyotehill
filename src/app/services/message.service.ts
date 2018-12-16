import { Injectable } from '@angular/core';
// import { FirebaseFirestore } from '@angular/fire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  
  getContent(){
    return 'you have been warned';
  }
  getObservableContent(): Observable<any>{
    return Observable.create('you have been warned');
  }
}
