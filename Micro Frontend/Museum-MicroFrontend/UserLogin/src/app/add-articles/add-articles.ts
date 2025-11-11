import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArticlesService } from '../services/articles-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-articles',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-articles.html',
  styleUrl: './add-articles.css',
})
export class AddArticles implements OnInit {
  addProductMessage: string | undefined;
  errorMessage: string | undefined;
  validationErrors: { [key: string]: string } = {};

  constructor(
    private article: ArticlesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  submit(data: any) {
    this.clearAllMessages();

    this.article.addArticle(data).subscribe({
      next: (result) => {
        this.addProductMessage = 'Article Added successfully!!';
        console.log('Success:', result);
        this.cdr.detectChanges();

        setTimeout(() => {
          this.addProductMessage = undefined;
          this.cdr.detectChanges();
        }, 3000);

        setTimeout(() => {
          this.router.navigate(['mfe2']);
        }, 1500);
      },
      error: (errorMessage: string) => {
        this.handleErrorResponse(errorMessage);
        console.error('Error adding article:', errorMessage);
        this.cdr.detectChanges();

        setTimeout(() => {
          this.clearAllMessages();
          this.cdr.detectChanges();
        }, 8000);
      },
    });
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
    }
  }

  private handleErrorResponse(errorMessage: string) {
    if (errorMessage.includes(':') && errorMessage.includes(',')) {
      this.validationErrors = {};
      const errors = errorMessage.split(', ');
      errors.forEach((error) => {
        const [field, message] = error.split(': ');
        this.validationErrors[field] = message;
      });
      this.errorMessage = 'Please fix the validation errors below.';
    } else {
      this.errorMessage = errorMessage;
    }
  }

  clearAllMessages() {
    this.addProductMessage = undefined;
    this.errorMessage = undefined;
    this.validationErrors = {};
  }

  resetForm(form: any) {
    form.reset();
    this.clearAllMessages();
    this.cdr.detectChanges();
  }

  getFieldError(fieldName: string): string | undefined {
    return this.validationErrors[fieldName];
  }

  hasFieldError(fieldName: string): boolean {
    return !!this.validationErrors[fieldName];
  }

  hasValidationErrors(): boolean {
    return Object.keys(this.validationErrors).length > 0;
  }

  getValidationErrorKeys(): string[] {
    return Object.keys(this.validationErrors);
  }
}
