import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutCallComponent } from './out-call.component';

describe('OutCallComponent', () => {
  let component: OutCallComponent;
  let fixture: ComponentFixture<OutCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
