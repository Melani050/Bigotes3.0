import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsuarioComponent } from './table-usuario.component';

describe('TableUsuarioComponent', () => {
  let component: TableUsuarioComponent;
  let fixture: ComponentFixture<TableUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
