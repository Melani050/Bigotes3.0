import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtransparenteComponent } from './cardtransparente.component';

describe('CardtransparenteComponent', () => {
  let component: CardtransparenteComponent;
  let fixture: ComponentFixture<CardtransparenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtransparenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardtransparenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
