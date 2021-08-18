import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../overview-card/overview-card';
import { CARDSPROJECTS, CARDSSKILLS, CARDSTRAININGS } from '../overview-card/overview-cards';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-overview-card-list',
  templateUrl: './overview-card-list.component.html',
  styleUrls: ['./overview-card-list.component.css']
})
export class OverviewCardListComponent implements OnInit {

  cards: OverviewCard[];

  constructor() {
    this.cards = CARDSPROJECTS;
    this.cards = this.cards.concat(CARDSSKILLS);
    this.cards = this.cards.concat(CARDSTRAININGS);
   }

  ngOnInit(): void {
  }

}
