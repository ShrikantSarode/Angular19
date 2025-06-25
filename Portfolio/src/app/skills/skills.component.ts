import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  @ViewChild('chartContainer2') chartContainer2!: ElementRef;
  chart2: echarts.ECharts | undefined;

  constructor() {}

  ngOnInit(): void {}

  option2 = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Skills',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: false,
      min: 7,
      max: 10,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: 'Skill Level',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 9.5, name: 'Angular' },
          { value: 8, name: 'TypeScript' },
          { value: 10, name: 'Figma' },
          { value: 9, name: 'Java' },
          { value: 8, name: 'Advance Java' },
          { value: 7, name: 'ReactJs' },
          { value: 10, name: 'Bootstrap' },
        ].sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function () {
          return Math.random() * 200;
        },
      },
    ],
  };

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          'Angular',
          'TypeScript',
          'Figma',
          'Java',
          'Advance Java',
          'ReactJs',
          'Bootstrap',
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Skill Level',
        type: 'bar',
        barWidth: '40%',
        data: [9.5, 8, 10, 9, 8, 7, 10],
        itemStyle: {
          color: 'rgb(170, 124, 0)',
        },
      },
    ],
  };

  ngAfterViewInit(): void {
    this.initChart();
    this.initChart2();
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.chart?.setOption(this.option);
  }

  initChart2(): void {
    this.chart2 = echarts.init(this.chartContainer2.nativeElement);
    this.chart2?.setOption(this.option2);
  }
}
