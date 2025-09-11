import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-articles',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-articles.html',
  styleUrl: './add-articles.css',
})
export class AddArticles {
  addProductMessage: string | undefined;
  constructor(private article: ArticlesService, private router: Router) {}

  ngOnInit(): void {}

  submit(data: any) {
    this.article.addArticle(data).subscribe((result) => {
      if (result) {
        this.addProductMessage = 'Article Added successfully!!';
        console.log(result);
        console.log(this.addProductMessage);
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
      }, 3000);
      this.router.navigate(['mfe2']);
    });
  }
}
