import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  titles: string[] = [
    "Software Engineer",
    'Full Stack Developer',
    'UX Designer',
  ];
  displayText: string = '';
  private currentTitleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const currentTitle = this.titles[this.currentTitleIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.displayText = currentTitle.substring(0, this.charIndex);

    let typingSpeed = 100;

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      typingSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentTitleIndex =
        (this.currentTitleIndex + 1) % this.titles.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }
}
