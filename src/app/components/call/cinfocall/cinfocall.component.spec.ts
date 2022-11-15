import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinfocallComponent } from './cinfocall.component';

describe('CinfocallComponent', () => {
  let component: CinfocallComponent;
  let fixture: ComponentFixture<CinfocallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinfocallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinfocallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
