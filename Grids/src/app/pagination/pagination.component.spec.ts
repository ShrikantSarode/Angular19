import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { AgGridModule } from 'ag-grid-angular';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [AgGridModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the PaginationComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rowData2 with expected length', () => {
    expect(component.rowData2?.length).toBeGreaterThan(0);
    expect(component.rowData2?.length).toBe(36);
    
  });

  it('should define columns correctly', () => {
    expect(component.columnDefs.length).toBeGreaterThan(0);
    const monthCol = component.columnDefs.find(col => col.field === 'month');
    expect(monthCol?.comparator).toBeDefined();
  });

  it('should set default column filter as agTextColumnFilter', () => {
    expect(component.defaultColDef.filter).toBe('agTextColumnFilter');
  });

  it('should set rowSelection to multiRow mode', () => {
    expect((component.rowSelection as any).mode).toBe('multiRow');
  });

  it('should have pagination enabled with default page size', () => {
    expect(component.paginationPageSize).toBe(10);
    expect(component.paginationPageSizeSelector).toEqual([10, 25, 50]);
  });

  it('should render ag-grid-angular component', () => {
    const agGrid = fixture.debugElement.query(By.css('ag-grid-angular'));
    expect(agGrid).toBeTruthy();
  });
});
