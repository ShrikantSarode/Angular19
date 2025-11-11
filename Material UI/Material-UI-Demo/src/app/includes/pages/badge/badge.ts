import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatDivider],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
