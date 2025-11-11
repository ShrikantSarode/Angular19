import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheet } from '../bottom-sheet/bottom-sheet';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-content',
  imports: [MatNavList],
  templateUrl: './bottom-sheet-content.html',
  styleUrl: './bottom-sheet-content.css',
})
export class BottomSheetContent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
