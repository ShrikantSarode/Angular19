import { Component } from '@angular/core';
import { AddArticleService } from '../service/add-article-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.html',
  styleUrl: './add-article.css',
})
export class AddArticle {
  addProductMessage: string | undefined;
  constructor(private article: AddArticleService, private router: Router) {}

  ngOnInit(): void {}

  


  submit(data: Article) {
    this.article.addArticle(data).subscribe((result) => {
      if (result) {
        this.addProductMessage = 'Article Added successfully!!';
        console.log(result);
        console.log(this.addProductMessage);
        
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
      }, 3000);
      this.router.navigate(['']);
    });
  }
}
