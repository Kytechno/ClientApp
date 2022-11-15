import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocallComponent } from './infocall.component';

describe('InfocallComponent', () => {
  let component: InfocallComponent;
  let fixture: ComponentFixture<InfocallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
