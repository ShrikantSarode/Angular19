import 'ag-grid-enterprise';
import { Component, OnInit } from '@angular/core';
import type { ColDef } from 'ag-grid-community';
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  NumberFilterModule,
  TextFilterModule,
  ValidationModule,
  themeQuartz,
} from 'ag-grid-community';
import {
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  PivotModule,
  SideBarModule,
} from 'ag-grid-enterprise';
import { AgGridAngular } from 'ag-grid-angular';

ModuleRegistry.registerModules([
  TextFilterModule,
  NumberFilterModule,
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  PivotModule,
  ValidationModule, // For development only
]);

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],  
  imports:[AgGridAngular]
})
export class SidebarComponent implements OnInit {
  darkMode = false;

  // Theme configuration (optional if not applying custom theming)
  theme = themeQuartz
    .withParams(
      {
        backgroundColor: '#FFE8E0',
        foregroundColor: '#361008CC',
        browserColorScheme: 'light',
      },
      'light-red'
    )
    .withParams(
      {
        backgroundColor: '#201008',
        foregroundColor: '#FFFFFFCC',
        browserColorScheme: 'dark',
      },
      'dark-red'
    );

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
  };

  rowData: any[] = Array.from({ length: 10 }, (_, i) => [
    { make: 'Toyota', model: 'Celica', price: 35000 + i * 1000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 + i * 1000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 + i * 1000 },
  ]).flat();

  // setDarkMode(enabled: boolean) {
  //   this.darkMode = enabled;
  //   document.body.dataset.agThemeMode = enabled ? 'dark-red' : 'light-red';
  // }

  ngOnInit() {
    // this.setDarkMode(false);
  }
}
