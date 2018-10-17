import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigationComponent,
    ResultPanelComponent,
    SubscriptionsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
