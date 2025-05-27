import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-mychart3',
  imports: [],
  templateUrl: './mychart3.component.html',
  styleUrl: './mychart3.component.css',
})
export class Mychart3Component implements OnInit, AfterViewInit {
  @ViewChild('chartContainer2') chartContainer2!: ElementRef;
  chart: echarts.ECharts | undefined;

  option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 70,
            name: 'SCORE'
          }
        ]
      }
    ]
  };
  
  
  ngOnInit(): void {}

 ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer2.nativeElement);
    this.chart?.setOption(this.option);
  }
}
