import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
  hoursPlaceholder = 'hh';
  minutesPlaceholder = 'mm';
  secondsPlaceholder = 'ss';
}
