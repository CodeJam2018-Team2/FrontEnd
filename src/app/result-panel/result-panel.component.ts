import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataSource } from '../models/DataSource.model';

@Component({
  selector: 'app-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.css']
})
export class ResultPanelComponent implements OnInit, OnChanges {

  @Input()
  results$: DataSource[];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
