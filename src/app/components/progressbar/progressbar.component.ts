import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {
  max = 200;
  showWarning?: boolean;
  dynamic = 0;
  type: 'success' | 'info' | 'warning' | 'danger' = 'info';
 
  constructor() {
    this.random();
  }
 
  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let type: 'success' | 'info' | 'warning' | 'danger';
 
    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }
 
    this.dynamic = value;
    this.type = type;
  }
}
