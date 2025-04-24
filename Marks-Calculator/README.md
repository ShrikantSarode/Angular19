steps for echarts:-

# if you use npm
npm install echarts -S
npm install ngx-echarts -S

import * as echarts from 'echarts';--------->in ts file


export class MarksComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;
  option: echarts.EChartsOption = {}; // Define the option property

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.chart?.setOption(this.option);
  }
}

 steps for form -

 <h1>Form Grouping in Reactive Forms</h1>

<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <input type="text" placeholder="Name" name="" id="" formControlName="name" />

  <br /><br />

  <input type="text" placeholder="Email" name="" id="" formControlName="email" />

  <br /><br />

  <input type="text" placeholder="Password" name="" id="" formControlName="password" />

  <br /><br />

 <button>Submit</button>
</form>


<div class="container" *ngIf="isSubmitted">
  <hr>
  <p>Name:{{this.profileForm.value.name}}</p>
  <p>Email:{{this.profileForm.value.email}}</p>
  <p>Password:{{this.profileForm.value.password}}</p>
</div>

 ts file-

 import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formGrouping';

  isSubmitted = false;

  profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    console.log(this.profileForm.value);
    this.isSubmitted = true;
  }
}


<!--  -->



import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as echarts from 'echarts';

@Component({
  selector: 'app-marks',
  imports: [ReactiveFormsModule],
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
})
export class MarksComponent implements OnInit, AfterViewInit {
  isSubmitted = false;
  showSettings = false;

  profileForm = new FormGroup({
    Maths: new FormControl(),
    Physics: new FormControl(),
    Biology: new FormControl(),
    Geometry: new FormControl(),
    Algebra: new FormControl(),
  });

  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.isSubmitted = true;

    const formValues = this.profileForm.value;
    const data = Object.keys(formValues).map(key => ({
      value: formValues[key],
      name: key,
    }));

    const option = {
      title: {
        text: 'Marks Distribution',
        subtext: 'Entered Marks',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Marks',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    this.chart?.setOption(option);
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  addSubject() {
    const newSubjectName = prompt('Enter the name of the new subject:');
    if (newSubjectName) {
      this.profileForm.addControl(newSubjectName, new FormControl());
    }
  }

  removeSubject() {
    const subjectName = prompt('Enter the name of the subject to remove:');
    if (subjectName && this.profileForm.contains(subjectName)) {
      this.profileForm.removeControl(subjectName);
    }
  }
}
