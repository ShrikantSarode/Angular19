import { Component } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-button',
  imports: [MatDivider, MatCard, MatButton, MatIcon, MatFabButton,MatMiniFabButton,MatIconButton,MatSpinner],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {}
