import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  users = ['Shrikant', 'Sanket', 'Sonu', 'Superman'];

  students = [
    { name: 'Tony', age: 23, year: 2 },
    { name: 'Raj', age: 23, year: 2 },
    { name: 'Rajesh', age: 23, year: 2 },
    { name: 'Kajesh', age: 23, year: 2 },
    { name: 'Lajesh', age: 23, year: 2 },
    { name: 'Rossy', age: 23, year: 2 },
  ];
  name = '';

  getName(name: string) {
    this.name = name;
  }
}
