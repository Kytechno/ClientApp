import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldashboardComponent } from './calldashboard.component';

describe('CalldashboardComponent', () => {
  let component: CalldashboardComponent;
  let fixture: ComponentFixture<CalldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
