import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Reports } from '../models/Reports.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.css']
})
export class ResultPanelComponent implements OnInit, OnChanges {

  @Input()
  report: Reports;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  photoURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
