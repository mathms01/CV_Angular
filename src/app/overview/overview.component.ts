import { Component, OnInit } from '@angular/core';
import { OverviewCardComponent } from '../overview-card/overview-card.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  cards = [{"hello":"world"},{"hello":"world"},{"hello":"world"}];

  constructor() { }

  ngOnInit(): void {
  }

}
