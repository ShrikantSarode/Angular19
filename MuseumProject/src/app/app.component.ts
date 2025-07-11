import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Article } from './interface/model';
import { ArticleService } from './article.service';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from "./add-article/add-article.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'MuseumProject';

  articles: Article[] | undefined;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    this.articleService.ArticleList().subscribe((data) => {
      this.articles = data;
      console.log(data);
    });
  }
}
