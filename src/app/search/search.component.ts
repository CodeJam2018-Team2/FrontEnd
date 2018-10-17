import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable, Subject } from 'rxjs';

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

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.searchService.getAllReports().subscribe(results => this.results$ = results);
    //   this.results$ = this.searchTerms.pipe(
    //     // wait 300ms after each keystroke before considering the term
    //     debounceTime(300),

    //     // ignore new term if same as previous term
    //     distinctUntilChanged(),

    //     // switch to new search observable each time the term changes
    //     switchMap((term: string) => this.searchService.getSearchResults(term)),
    //   );
    // }
  }
