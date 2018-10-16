import { Injectable } from '@angular/core';
import { DataSource } from '../models/DataSource.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://team2-backend.azurewebsites.net';


  constructor() { }

  getTypeAheadResults(searchString: string) {

  }
}
