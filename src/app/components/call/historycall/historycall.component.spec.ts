import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycallComponent } from './historycall.component';

describe('HistorycallComponent', () => {
  let component: HistorycallComponent;
  let fixture: ComponentFixture<HistorycallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorycallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorycallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
