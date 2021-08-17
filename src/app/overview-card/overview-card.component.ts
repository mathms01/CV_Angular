import { Component, Inject, Input, OnInit } from '@angular/core';
import { OverviewCard } from './overview-card';

@Component({
  selector: 'card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.css']
})
export class OverviewCardComponent implements OnInit {
  @Input('card') overviewCard: OverviewCard;

  constructor(@Inject(String) title : string, @Inject(String) subtitle : string, @Inject(String) description : string, @Inject(String) tags : string[]) { 
    this.overviewCard = new OverviewCard(title, subtitle, description, tags);
  }

  ngOnInit(): void {
  }

}
