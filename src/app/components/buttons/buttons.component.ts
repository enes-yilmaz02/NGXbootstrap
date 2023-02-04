import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  checkModel: { left?: boolean; middle?: boolean; right?: boolean } = { left: false, middle: true, right: false };

}
