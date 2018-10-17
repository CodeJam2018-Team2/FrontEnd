import { Injectable } from '@angular/core';
import { DataSource } from '../models/DataSource.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { datasources } from '../models/DataSource.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://team2-backend.azurewebsites.net';
  private dataSource = new BehaviorSubject<DataSource[]>(null);
  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getSearchResults(searchString: string): Observable<DataSource[]> {
    if (searchString === '') {
      this.getAllSearchResults();
      return;
    } else {
      const results = datasources.filter(function (result) {
        return result.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      });
      this.updatedDataSelection(results);
      return this.data;
    }
  }

  getAllSearchResults(): Observable<DataSource[]> {
    this.updatedDataSelection(datasources);
    return this.data;
  }

  updatedDataSelection(data: DataSource[]) {
    this.dataSource.next(data);
  }
}
