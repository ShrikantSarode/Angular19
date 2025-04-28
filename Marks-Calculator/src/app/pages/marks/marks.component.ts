import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import * as echarts from 'echarts';

@Component({
  selector: 'app-marks',
  imports: [ReactiveFormsModule,CommonModule],
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
  } as { [key: string]: AbstractControl });

  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  constructor() {}

  ngOnInit(): void {
    
  }

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

  removeSubject(index: number) {
    const controlNames = Object.keys(this.profileForm.controls);  
    if (index >= 0 && index < controlNames.length) {
        const subjectName = controlNames[index];  
        this.profileForm.removeControl(subjectName);  
        this.onSubmit();
        alert(`Subject '${subjectName}' removed`);
    } else {
        alert('Invalid index');
    }
}


  // removeSubject() {
  //   const subjectName = prompt('Enter the name of the subject to remove:');
  //   if (subjectName && this.profileForm.contains(subjectName)) {
  //     this.profileForm.removeControl(subjectName);
  //     this.onSubmit();
  //   }
  // }
}
