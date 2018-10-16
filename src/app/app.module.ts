import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigationComponent,
    ResultPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
