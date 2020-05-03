import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoDrinksComponent } from './alco-drinks.component';

describe('AlcoDrinksComponent', () => {
  let component: AlcoDrinksComponent;
  let fixture: ComponentFixture<AlcoDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
