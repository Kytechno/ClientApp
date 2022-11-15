import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayourtComponent } from './mainlayourt.component';

describe('MainlayourtComponent', () => {
  let component: MainlayourtComponent;
  let fixture: ComponentFixture<MainlayourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlayourtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlayourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
