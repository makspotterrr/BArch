import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  arraySize         = 5;
  arrayMinSize      = 2;
  arrayItemsSize    = 20;
  arrayItemsMinSize = 1;
  isMoveItemToEnd   = true;
  items             = [];

  arraySizeFormControl: FormControl      = new FormControl(
    this.arraySize,
    [Validators.min(this.arrayMinSize), Validators.required],
  );

  arrayItemsSizeFormControl: FormControl = new FormControl(
    this.arrayItemsSize,
    [Validators.min(this.arrayItemsMinSize), Validators.required],
  );

  generateItems(): void {
    if (this.arraySizeFormControl.errors || this.arrayItemsSizeFormControl.errors) {
      return;
    }

    this.items = new Array(this.arraySizeFormControl.value);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = Math.round(Math.random() * this.arrayItemsSizeFormControl.value);
    }
  }

  onClickItem(index: number): void {
    const item = this.items.splice(index, 1);

    if (this.isMoveItemToEnd) {
      this.items.push(item);
    } else {
      this.items.unshift(item);
    }
  }
}
