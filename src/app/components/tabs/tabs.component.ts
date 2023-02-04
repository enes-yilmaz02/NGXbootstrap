import { Component } from '@angular/core';
interface ITab {
  title: string;
  content: string;
  removable: boolean;
  disabled: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs: ITab[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1', removable: false, disabled: false},
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', removable: false, disabled: false},
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true, disabled: false}
  ];
 
  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }
 
  removeTabHandler(tab: ITab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
}
