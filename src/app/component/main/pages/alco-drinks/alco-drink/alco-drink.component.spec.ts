import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoDrinkComponent } from './alco-drink.component';

describe('AlcoDrinkComponent', () => {
  let component: AlcoDrinkComponent;
  let fixture: ComponentFixture<AlcoDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
