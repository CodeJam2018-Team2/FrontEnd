import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormControl } from '@angular/forms';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Reports } from '../models/Reports.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  results$: Reports[];

  searchControl = new FormControl();

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) {
  }



  ngOnInit() {
    this.searchService.getAllReports().subscribe(results => this.results$ = results);
  }
}
