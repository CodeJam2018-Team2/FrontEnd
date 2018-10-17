import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Reports } from '../models/Reports.model';

@Component({
  selector: 'app-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.css']
})
export class ResultPanelComponent implements OnInit, OnChanges {

  @Input()
  results$: Reports[];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
