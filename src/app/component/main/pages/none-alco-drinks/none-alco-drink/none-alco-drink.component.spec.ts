import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneAlcoDrinkComponent } from './none-alco-drink.component';

describe('NoneAlcoDrinkComponent', () => {
  let component: NoneAlcoDrinkComponent;
  let fixture: ComponentFixture<NoneAlcoDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneAlcoDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneAlcoDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
