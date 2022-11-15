import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCallComponent } from './in-call.component';

describe('InCallComponent', () => {
  let component: InCallComponent;
  let fixture: ComponentFixture<InCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
