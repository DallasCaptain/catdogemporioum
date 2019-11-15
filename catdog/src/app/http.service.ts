import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  getDogs(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/dogs');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    return tempObservable;
 }

  createDog(dog){
    console.log('creating dog', dog)
    return this._http.post('/dogs', dog)
    
  }


}
