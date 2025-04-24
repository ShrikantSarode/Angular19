import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mychart2Component } from './mychart2.component';

describe('Mychart2Component', () => {
  let component: Mychart2Component;
  let fixture: ComponentFixture<Mychart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mychart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mychart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
