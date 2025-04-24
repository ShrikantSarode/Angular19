import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAndChartsComponent } from './graph-and-charts.component';

describe('GraphAndChartsComponent', () => {
  let component: GraphAndChartsComponent;
  let fixture: ComponentFixture<GraphAndChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphAndChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphAndChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
