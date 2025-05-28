import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStyleRowStyleComponent } from './cell-style-row-style.component';

describe('CellStyleRowStyleComponent', () => {
  let component: CellStyleRowStyleComponent;
  let fixture: ComponentFixture<CellStyleRowStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellStyleRowStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellStyleRowStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
