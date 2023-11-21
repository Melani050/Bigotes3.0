import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerrosComponent } from './card-perros.component';

describe('CardPerrosComponent', () => {
  let component: CardPerrosComponent;
  let fixture: ComponentFixture<CardPerrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPerrosComponent]
    });
    fixture = TestBed.createComponent(CardPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
