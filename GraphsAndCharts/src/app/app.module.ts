import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { NgModule } from '@angular/core';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({ echarts }),
  ],
})
export class AppModule {}