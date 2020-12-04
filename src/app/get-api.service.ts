import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  method(){
    return console.log('qwerty');
  }
  
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos/1'
  //posts: any;
  constructor(private http: HttpClient) {}

  apiCAll () {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
