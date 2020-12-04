import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {GetAPIService} from '../get-api.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  brews: Object;
  constructor(private _http: GetAPIService) { }

  ngOnInit(): void {
    this._http.apiCAll().subscribe(data =>{
      this.brews = data;
      console.log(this.brews);
    });
  }

}
