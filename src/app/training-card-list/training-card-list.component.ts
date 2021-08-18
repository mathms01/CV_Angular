import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../overview-card/overview-card';
import { CARDSTRAININGS } from '../overview-card/overview-cards';

@Component({
  selector: 'app-training-card-list',
  templateUrl: './training-card-list.component.html',
  styleUrls: ['./training-card-list.component.css']
})
export class TrainingCardListComponent implements OnInit {

  cards: OverviewCard[];

  constructor() {
    this.cards = CARDSTRAININGS;
}

  ngOnInit(): void {
  }

}
