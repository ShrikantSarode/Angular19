import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCatalogue } from './article-catalogue';

describe('ArticleCatalogue', () => {
  let component: ArticleCatalogue;
  let fixture: ComponentFixture<ArticleCatalogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCatalogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCatalogue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
