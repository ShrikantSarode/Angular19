import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Article } from '../interface/model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  constructor(private articleService: ArticleService) {}

  addArticle(data: Article) {
    this.articleService.addArticle(data).subscribe((data) => {
      console.log(data);
    });
  }
}
