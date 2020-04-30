import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoCocktailsComponent } from './alco-cocktails.component';

describe('AlcoCocktailsComponent', () => {
  let component: AlcoCocktailsComponent;
  let fixture: ComponentFixture<AlcoCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
