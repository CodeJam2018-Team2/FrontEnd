import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../models/Subscription.model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subscriptions$: Subscription[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.getAllSubscriptions().subscribe(subscriptions => this.subscriptions$ = subscriptions);
  }

}
