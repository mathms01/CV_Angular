import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingsComponent } from './trainings/trainings.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'trainings', component: TrainingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }