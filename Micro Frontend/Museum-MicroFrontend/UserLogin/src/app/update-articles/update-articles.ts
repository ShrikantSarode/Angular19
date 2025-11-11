import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../services/articles-service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-articles.html',
  styleUrls: ['./update-articles.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class UpdateArticlesComponent implements OnInit {
  selectedArticle = {
    articleId: '',
    artName: '',
    price: null,
    description: '',
    museumId: '',
    quantity: null,
    image: '',
    remainingStock: null,
  };

  Object = Object;

  updateArticleMessage = '';
  fieldErrors: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const articleId = this.route.snapshot.params['id'];
    this.loadArticle(articleId);
  }

  loadArticle(id: string) {
    this.articlesService.getArticleById(Number(id)).subscribe({
      next: (article: any) => {
        this.selectedArticle = {
          articleId: article.id || article.articleId,
          artName: article.artName || '',
          price: article.price || null,
          description: article.description || '',
          museumId: article.museumId || '',
          quantity: article.quantity || null,
          image: article.image || '',
          remainingStock: article.remainingStock || null,
        };

        this.cdr.detectChanges();
      },
      error: (error) => {
        this.cdr.detectChanges();
        this.updateArticleMessage = 'Could not load article data';
      },
    });
  }

  update(articleData: any) {
    const id = this.selectedArticle.articleId || articleData.articleId;

    if (!id) {
      this.updateArticleMessage = 'Article ID is missing';
      return;
    }

    this.updateArticleMessage = '';
    this.fieldErrors = {};

    this.articlesService.updateArticle(id, articleData).subscribe({
      next: (response) => {
        this.updateArticleMessage = 'Article updated successfully!';
        setTimeout(() => {
          this.router.navigate(['/mfe1/manage-articles']);
        }, 1500);
      },
      error: (error) => {
        console.log('Full error object:', error);

        if (error && typeof error === 'string') {
          if (error.includes(':')) {
            const [field, message] = error.split(':').map((s) => s.trim());
            this.fieldErrors[field] = message;
          } else {
            this.updateArticleMessage = error;
          }
        } else if (error && error.error) {
          this.fieldErrors = error.error;
        } else {
          this.updateArticleMessage = 'Update failed. Please try again.';
        }
        this.cdr.detectChanges();
      },
    });
  }

  hasError(fieldName: string): boolean {
    return !!this.fieldErrors[fieldName];
  }

  getError(fieldName: string): string {
    return this.fieldErrors[fieldName] || '';
  }

  hasFieldErrors(): boolean {
    return Object.keys(this.fieldErrors).length > 0;
  }

  clearMessages() {
    this.updateArticleMessage = '';
    this.fieldErrors = {};
  }

  goBack() {
    this.router.navigate(['/mfe1/manage-articles']);
  }
}
