import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCardListComponent } from './training-card-list.component';

describe('TrainingCardListComponent', () => {
  let component: TrainingCardListComponent;
  let fixture: ComponentFixture<TrainingCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
