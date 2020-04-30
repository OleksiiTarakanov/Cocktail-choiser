import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneAlcoholComponent } from './none-alcohol.component';

describe('NoneAlcoholComponent', () => {
  let component: NoneAlcoholComponent;
  let fixture: ComponentFixture<NoneAlcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneAlcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
