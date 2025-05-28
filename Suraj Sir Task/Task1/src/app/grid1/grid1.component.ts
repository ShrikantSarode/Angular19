import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ClientSideRowModelModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  TextFilterModule,
  NumberFilterModule,
} from 'ag-grid-community';
import * as echarts from 'echarts';
import { Grid1 } from './grid1';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  TextFilterModule,
  NumberFilterModule,
]);

@Component({
  selector: 'app-grid1',
  standalone: true,
  imports: [AgGridAngular, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './grid1.component.html',
})
export class Grid1Component implements AfterViewInit, OnInit {
  private gridApi!: GridApi<Grid1>;

  columnDefs: ColDef[] = [
    { field: 'tagName', headerName: 'Tag Name', filter: 'agTextColumnFilter' },
    { field: 'value', headerName: 'Value', filter: 'agNumberColumnFilter' },
    { field: 'unit', headerName: 'Unit', filter: 'agTextColumnFilter' },
    { field: 'quantity', headerName: 'Quantity', filter: 'agTextColumnFilter' },
    {
      field: 'lastUpdate',
      headerName: 'Last Update',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'dataType',
      headerName: 'Data Type',
      filter: 'agTextColumnFilter',
    },
    { field: 'writable', headerName: 'Writable', filter: 'agTextColumnFilter' },
    {
      field: 'dataProvider',
      headerName: 'Data Provider',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'dataSource',
      headerName: 'Data Source',
      filter: 'agTextColumnFilter',
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    sortable: true,
    resizable: true,
  };

  rowData: Grid1[] = [
    {
      tagName: '000 test tag',
      value: 16.4,
      unit: 'K',
      quantity: 'Good',
      lastUpdate: '3/31/25, 10:57PM',
      dataType: 'float',
      writable: 'true',
      dataProvider: 'DP2',
      dataSource: 'DS1',
    },
    {
      tagName: 'Sensor A1',
      value: 32.8,
      unit: '°C',
      quantity: 'Stable',
      lastUpdate: '3/31/25, 11:10PM',
      dataType: 'float',
      writable: 'false',
      dataProvider: 'DP1',
      dataSource: 'DS3',
    },
    {
      tagName: 'Valve Pressure',
      value: 101.5,
      unit: 'psi',
      quantity: 'Nominal',
      lastUpdate: '3/31/25, 11:00PM',
      dataType: 'integer',
      writable: 'true',
      dataProvider: 'DP3',
      dataSource: 'DS4',
    },
    {
      tagName: 'Pump Speed',
      value: 75.2,
      unit: 'RPM',
      quantity: 'High',
      lastUpdate: '3/31/25, 10:55PM',
      dataType: 'float',
      writable: 'false',
      dataProvider: 'DP2',
      dataSource: 'DS2',
    },
    {
      tagName: 'Humidity Sensor',
      value: 58,
      unit: '%',
      quantity: 'Normal',
      lastUpdate: '3/31/25, 10:50PM',
      dataType: 'integer',
      writable: 'true',
      dataProvider: 'DP5',
      dataSource: 'DS5',
    },
  ];

  // profileForm = new FormGroup<{ [key: string]: FormControl }>({});

  profileForm = new FormGroup({});

  showSettings = false;

  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: echarts.ECharts | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData.forEach((row) => {
      this.profileForm.addControl(row.tagName, new FormControl(row.value));
    });
  }

  ngAfterViewInit(): void {
    this.initChart();
    this.onSubmit();
  }

  onGridReady(params: GridReadyEvent<Grid1>) {
    this.gridApi = params.api;
  }

  initChart(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
  }

  onSubmit(): void {
    const formValues = this.profileForm.value;

    // data
    const data = Object.entries(formValues).map(([tagName, value]) => {
      const row = this.rowData.find((r) => r.tagName === tagName);
      const unit = row?.unit || '';
      return {
        name: `${tagName} (${unit})`,
        value: Number(value),
      };
    });

    const option = {
      title: {
        text: 'Sensor Value Distribution',
        subtext: 'Based on Grid Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Value',
          type: 'pie',
          radius: '50%',
          data,
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

  toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  updateField(name: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    this.profileForm.get(name)?.setValue(value);
    this.onSubmit();
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
}
