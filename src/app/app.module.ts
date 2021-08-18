import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewCardListComponent } from './overview-card-list/overview-card-list.component';
import { TrainingCardListComponent } from './training-card-list/training-card-list.component';
import { SkillCardListComponent } from './skill-card-list/skill-card-list.component';
import { ProjectCardListComponent } from './project-card-list/project-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SkillsComponent,
    TrainingsComponent,
    ProjectsComponent,
    NavbarComponent,
    OverviewCardComponent,
    OverviewCardListComponent,
    TrainingCardListComponent,
    SkillCardListComponent,
    ProjectCardListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
