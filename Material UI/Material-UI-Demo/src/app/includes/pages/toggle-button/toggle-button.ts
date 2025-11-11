import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatCard } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-button',
  imports: [MatButtonToggleModule, MatCheckboxModule, MatCard,MatDivider,MatIcon],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButton {

  alertsEnabled=true

  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update((value) => !value);
  }
}
