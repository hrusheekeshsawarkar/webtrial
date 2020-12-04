import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {GetAPIService} from './get-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webtrial';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos/1'
  posts: any;
  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

  /*constructor( private api: GetAPIService){

  }
  ngOnInit(){
    this.api.apiCAll().subscribe((data)=>{
      console.warn("get api data",data);
    })
  }*/
}
