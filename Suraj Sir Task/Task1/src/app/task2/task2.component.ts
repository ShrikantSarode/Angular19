import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import * as echarts from 'echarts';

@Component({
  selector: 'app-task2',
  imports: [RouterModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
})
export class Task2Component implements OnInit, AfterViewInit {
  @ViewChild('chartContainer2') chartContainer2!: ElementRef;
  @ViewChild('chartContainer1') chartContainer1!: ElementRef;
  chart: echarts.ECharts | undefined;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initChart();
    this.initChart2();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer2.nativeElement);
    this.chart?.setOption(this.option);
  }

  initChart2(): void {
    this.chart = echarts.init(this.chartContainer1.nativeElement);
    this.chart?.setOption(this.option1);
  }

  option1 = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 70,
            name: 'SCORE',
          },
        ],
      },
    ],
  };

  option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%'],
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 0.4)',
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 0, 180, 0.4)',
        },
      ],
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5,
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
        },
        areaStyle: {},
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100],
        ],
      },
    ],
  };
}
