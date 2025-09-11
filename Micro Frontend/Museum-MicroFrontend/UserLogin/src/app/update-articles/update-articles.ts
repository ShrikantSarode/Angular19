import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../Models/datatypes';
import { ArticlesService } from '../services/articles-service';

@Component({
  selector: 'app-update-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-articles.html',
  styleUrls: ['./update-articles.css'],
})
export class UpdateArticlesComponent {
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private router: Router
  ) {}

  updateArticleMessage = '';
  loading = true;
  selectedArticle: Article = {
    articleId: 0,
    artName: '',
    price: 0,
    description: '',
    museumId: 0,
    quantity: 0,
    image: '',
    remainingStock: 0,
  };

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!id) {
      this.loading = false;
      this.updateArticleMessage = 'Invalid article id.';
      return;
    }

    // Fetch the article by id
    this.articleService.getArticleById(id).subscribe({
      next: (article) => {
        this.selectedArticle = article;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.updateArticleMessage = 'Failed to load article.';
        this.loading = false;
      },
    });
  }

  update(formValue: Partial<Article>) {
    if (!this.selectedArticle) return;

    // Merge any changed form values onto the model
    const payload: Article = { ...this.selectedArticle, ...formValue };

    this.articleService.update(payload).subscribe({
      next: () => {
        this.updateArticleMessage = 'Article updated successfully.';
        // Navigate back to manager-articles (adjust path to your list page)
        this.router.navigate(['/manager-articles']);
      },
      error: (err) => {
        console.error(err);
        this.updateArticleMessage = 'Update failed. Please try again.';
      },
    });
  }
}
