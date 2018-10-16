import { Injectable } from '@angular/core';
import { DataSource } from '../models/DataSource.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { datasources } from '../models/DataSource.model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://team2-backend.azurewebsites.net';


  constructor(private http: HttpClient) {
  }

  getSearchResults(searchString: string) {
    const results = datasources.filter(function (result) {
      return result.name.toLowerCase().indexOf(searchString) > -1;
    });
    return results;
  }
}
