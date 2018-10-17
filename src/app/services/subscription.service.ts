import { Injectable } from '@angular/core';
import { Reports } from '../models/Reports.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from '../models/Subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  baseUrl = 'https://dataexplorerapi.azurewebsites.net/api';


  constructor(private http: HttpClient) {
  }

  getAllSubscriptions(): Observable<Subscription[]> {
    const url = this.baseUrl + '/values/subscriptions';
    return this.http.get<Subscription[]>(url);
  }
}
