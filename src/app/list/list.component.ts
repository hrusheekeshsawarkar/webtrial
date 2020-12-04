import { Component, OnInit } from '@angular/core';
import {GetAPIService} from '../get-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _http: GetAPIService) { }

  ngOnInit(): void {
    this._http.method();
  }

}
