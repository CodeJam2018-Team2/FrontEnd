import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable, Subject } from 'rxjs';
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
  private searchTerms = new Subject<string>();

  searchControl = new FormControl();

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) {
  }


  search(term: string): void {
    if (!term) {
      this.results$ = this.results$;
    }

    const filtered = this.results$.filter((result) => {
      return result.reportName.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
    this.results$ = filtered;
  }


  ngOnInit() {
    this.searchService.getAllReports().subscribe(results => this.results$ = results);
  }
