import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserServices } from '../services/user-services';
import { ArticlesService } from '../services/articles-service';
import { Article } from '../Models/datatypes';

@Component({
  selector: 'app-manage-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-articles.html',
  styleUrls: ['./manage-articles.css'],
})
export class ManageArticles implements OnInit {
  artItems: Article[] = [];
  quantity = 0;

  artItemsCart: any[] = [];
  orderSummary: any = {};

  loading = false;
  error?: string;

  constructor(
    private userServices: UserServices,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.fetchArticles();
    this.cdr.detectChanges();
  }

  private fetchArticles(): void {
    this.loading = true;
    this.userServices.getCatalog().subscribe({
      next: (res: any) => {
        this.artItems = (res ?? []).map((item: any) => ({
          ...item,
          quantity: item.quantity ?? 0,
        }));
        this.loading = false;

        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.message || 'Failed to load catalogue.';
        this.cdr.detectChanges();
      },
    });
  }

  trackById = (_: number, art: Article) =>
    (art as any).articleId ?? (art as any).id ?? 0;

  decrementQuantity(art: any): void {
    if (art.quantity > 0) {
      art.quantity--;
      const index = this.artItemsCart.findIndex((item) => item.id === art.id);
      if (art.quantity === 0 && index !== -1) {
        this.artItemsCart.splice(index, 1);
      } else if (index !== -1) {
        this.artItemsCart[index] = { ...art };
      }
      this.cdr.detectChanges();
    }
  }

  incrementQuantity(art: any): void {
    art.quantity = (art.quantity ?? 0) + 1;
    const index = this.artItemsCart.findIndex((item) => item.id === art.id);
    if (index === -1) {
      this.artItemsCart.push({ ...art });
    } else {
      this.artItemsCart[index] = { ...art };
    }
    this.cdr.detectChanges();
  }

  onDelete(id?: number): void {
    const articleId = id ?? 0;

    if (!articleId) {
      alert('Invalid article ID');
      return;
    }

    const confirmed = confirm(
      'Are you sure you want to delete this article? This action cannot be undone.'
    );
    if (!confirmed) return;

    this.articleService.deleteArticle(articleId).subscribe({
      next: (response: string) => {
        console.log('Delete response:', response);

        this.artItems = this.artItems.filter(
          (article: any) => (article.articleId ?? article.id) !== articleId
        );

        alert('Article deleted successfully!');

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Delete failed:', error);
        alert('Delete failed. Please try again.');
      },
    });
  }

  onUpdate(articleId?: number): void {
    if (!articleId) {
      alert('Invalid article ID');
      return;
    }

    this.router.navigate(['/mfe1/update-articles', articleId]);
  }
}
