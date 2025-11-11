import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetContent } from './bottom-sheet-content';

describe('BottomSheetContent', () => {
  let component: BottomSheetContent;
  let fixture: ComponentFixture<BottomSheetContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
