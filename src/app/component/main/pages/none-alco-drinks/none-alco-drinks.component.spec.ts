import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneAlcoDrinksComponent } from './none-alco-drinks.component';

describe('NoneAlcoDrinksComponent', () => {
  let component: NoneAlcoDrinksComponent;
  let fixture: ComponentFixture<NoneAlcoDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneAlcoDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneAlcoDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
