import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGatosComponent } from './card-gatos.component';

describe('CardGatosComponent', () => {
  let component: CardGatosComponent;
  let fixture: ComponentFixture<CardGatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGatosComponent]
    });
    fixture = TestBed.createComponent(CardGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
