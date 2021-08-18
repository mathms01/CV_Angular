import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../overview-card/overview-card';
import { CARDSSKILLS } from '../overview-card/overview-cards';

@Component({
  selector: 'app-skill-card-list',
  templateUrl: './skill-card-list.component.html',
  styleUrls: ['./skill-card-list.component.css']
})
export class SkillCardListComponent implements OnInit {

  cards: OverviewCard[];

  constructor() {
    this.cards = CARDSSKILLS;
   }

  ngOnInit(): void {
  }

}
