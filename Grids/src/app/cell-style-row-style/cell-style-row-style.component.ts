import { Component } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
// import "./style.css";
import {
  AllCommunityModule,
  CellClassRules,
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  RowClassRules,
  RowSelectionOptions,
  colorSchemeDarkBlue,
  createGrid,
  themeQuartz,
} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-cell-style-row-style',
  imports: [AgGridAngular],
  templateUrl: './cell-style-row-style.component.html',
  styleUrl: './cell-style-row-style.component.css'
})
export class CellStyleRowStyleComponent {

  theme4 = themeQuartz.withPart(colorSchemeDarkBlue);

public rowData: any[] | null = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Vauxhall", model: "Corsa", price: 18460, electric: false },
    { make: "Volvo", model: "EX30", price: 33795, electric: true },
    { make: "Mercedes", model: "Maybach", price: 175720, electric: false },
    { make: "Vauxhall", model: "Astra", price: 25795, electric: false },
    { make: "Fiat", model: "Panda", price: 13724, electric: false },
    { make: "Jaguar", model: "I-PACE", price: 69425, electric: true },
  ];
  public columnDefs: ColDef[] = [
    {
      field: "make",
    },
    { field: "model" },
    { field: "price", filter: "agNumberColumnFilter" },
    {
      field: "electric",
      cellClassRules: ragCellClassRules,
    },
  ];
  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
    flex: 1,
  };
  public rowClassRules: RowClassRules = {
    // apply red to Ford cars
    "rag-red": (params) => params.data.make === "Ford",
  };
  public rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    headerCheckbox: false,
  };
}

const ragCellClassRules: CellClassRules = {
  // apply green to electric cars
  "rag-green": (params) => params.value === true,
};
const gridDiv = document.querySelector<HTMLElement>("#myGrid")!;