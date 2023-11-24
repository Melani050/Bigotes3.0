import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadosComponent } from './apartados.component';

describe('ApartadosComponent', () => {
  let component: ApartadosComponent;
  let fixture: ComponentFixture<ApartadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartadosComponent]
    });
    fixture = TestBed.createComponent(ApartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
