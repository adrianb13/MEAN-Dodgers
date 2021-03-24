import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.css']
})
export class RosterTableComponent implements OnInit {

  constructor() { }

  @Input() roster: [];
  @Input() position : string;

  ngOnInit(): void {
  }

}
