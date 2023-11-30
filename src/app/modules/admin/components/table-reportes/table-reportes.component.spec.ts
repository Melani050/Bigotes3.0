import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportesComponent } from './table-reportes.component';

describe('TableReportesComponent', () => {
  let component: TableReportesComponent;
  let fixture: ComponentFixture<TableReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
