import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcallComponent } from './requestcall.component';

describe('RequestcallComponent', () => {
  let component: RequestcallComponent;
  let fixture: ComponentFixture<RequestcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
