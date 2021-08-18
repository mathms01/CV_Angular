import { Component, OnInit } from '@angular/core';
import { OverviewCard } from '../overview-card/overview-card';
import { CARDSPROJECTS } from '../overview-card/overview-cards';

@Component({
  selector: 'app-project-card-list',
  templateUrl: './project-card-list.component.html',
  styleUrls: ['./project-card-list.component.css']
})
export class ProjectCardListComponent implements OnInit {

  cards: OverviewCard[];

  constructor() {
    this.cards = CARDSPROJECTS;
   }

  ngOnInit(): void {
  }

}
