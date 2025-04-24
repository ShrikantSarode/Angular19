import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mychart4Component } from './mychart4.component';

describe('Mychart4Component', () => {
  let component: Mychart4Component;
  let fixture: ComponentFixture<Mychart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mychart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mychart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
