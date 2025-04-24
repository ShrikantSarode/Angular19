import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mychart3Component } from './mychart3.component';

describe('Mychart3Component', () => {
  let component: Mychart3Component;
  let fixture: ComponentFixture<Mychart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mychart3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mychart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
