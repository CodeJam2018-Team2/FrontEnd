import { Injectable } from '@angular/core';
import { Reports } from '../models/Reports.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://dataexplorerapi.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  getSearchResults(searchString: string): Observable<Reports[]> {
    const url = this.baseUrl + '/search?' + searchString;
    return this.http.get<Reports[]>(url);
  }

  getAllReports(): Observable<Reports[]> {
    const url = this.baseUrl + '/values/reports';
    return this.http.get<Reports[]>(url);
  }
}
