import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardListComponent } from './skill-card-list.component';

describe('SkillCardListComponent', () => {
  let component: SkillCardListComponent;
  let fixture: ComponentFixture<SkillCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
