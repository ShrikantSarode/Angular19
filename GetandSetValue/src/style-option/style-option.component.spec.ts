import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOptionComponent } from './style-option.component';

describe('StyleOptionComponent', () => {
  let component: StyleOptionComponent;
  let fixture: ComponentFixture<StyleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
