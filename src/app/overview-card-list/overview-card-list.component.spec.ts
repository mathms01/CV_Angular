import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardListComponent } from './overview-card-list.component';

describe('OverviewCardListComponent', () => {
  let component: OverviewCardListComponent;
  let fixture: ComponentFixture<OverviewCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
