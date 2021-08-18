import { Component, Inject, Input, OnInit } from '@angular/core';
import { OverviewCard } from './overview-card';

@Component({
  selector: 'card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.css', "../app.component.css"]
})
export class OverviewCardComponent implements OnInit {
  @Input('card') overviewCard: OverviewCard = new OverviewCard('hey', 'hey', 'hey', ['hey', 'hey'], 'hey');

  constructor() { 

  }

  ngOnInit(): void {
  }

}
