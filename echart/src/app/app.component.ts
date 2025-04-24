import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MychartComponent } from "./Pages/mychart/mychart.component";
import { Mychart2Component } from "./Pages/mychart2/mychart2.component";
import { Mychart3Component } from "./Pages/mychart3/mychart3.component";
import { Mychart4Component } from "./Pages/mychart4/mychart4.component";

@Component({
  selector: 'app-root',
  imports: [MychartComponent, Mychart2Component, Mychart3Component, Mychart4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'echart';
}
