import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../overview-card/overview-card';
import { CARDS } from '../overview-card/overview-cards';

@Component({
  selector: 'app-overview-card-list',
  templateUrl: './overview-card-list.component.html',
  styleUrls: ['./overview-card-list.component.css']
})
export class OverviewCardListComponent implements OnInit {

  cards: OverviewCard[];

  constructor() {
    this.cards = CARDS; 
   }

  ngOnInit(): void {
  }

}
