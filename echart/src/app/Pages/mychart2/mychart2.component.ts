import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-mychart2',
  imports: [],
  templateUrl: './mychart2.component.html',
  styleUrl: './mychart2.component.css',
})
export class Mychart2Component implements OnInit, AfterViewInit {
  @ViewChild('chartContainer1') chartContainer1!: ElementRef;
  chart: echarts.ECharts | undefined;

  // 2nd chart
  option1: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer1.nativeElement);
    this.chart?.setOption(this.option1);
  }
}
