import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtrasparenteComponent } from './cardtrasparente.component';

describe('CardtrasparenteComponent', () => {
  let component: CardtrasparenteComponent;
  let fixture: ComponentFixture<CardtrasparenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardtrasparenteComponent]
    });
    fixture = TestBed.createComponent(CardtrasparenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
