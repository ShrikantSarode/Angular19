import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticles } from './update-articles';

describe('UpdateArticles', () => {
  let component: UpdateArticles;
  let fixture: ComponentFixture<UpdateArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
