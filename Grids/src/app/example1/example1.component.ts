import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';
import type { ICellRendererAngularComp } from "ag-grid-angular";
import { PaginationComponent } from "../pagination/pagination.component";
import { CellStyleRowStyleComponent } from "../cell-style-row-style/cell-style-row-style.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-example1',
  imports: [AgGridAngular, PaginationComponent, CellStyleRowStyleComponent, SidebarComponent],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css',
})
export class Example1Component {
  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  // 2nd

  
}
