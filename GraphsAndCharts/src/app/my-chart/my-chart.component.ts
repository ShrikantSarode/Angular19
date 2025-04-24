import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-my-chart',
  template: `
    <div #chartContainer style="width: 600px; height: 400px;"></div>
  `,
  styles: [`
    #main {
      width: 100%;
      height: 100%;
    }
  `],
})
export class MyChartComponent implements AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.setOptionsFromExample(); // Call a new method to set options
  }

  setOptionsFromExample(): void {
    const option: echarts.EChartsOption = { // Use EChartsOption for type safety
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

    this.chart?.setOption(option);
  }
}