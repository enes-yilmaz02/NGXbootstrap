import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  totalItems = 64;
  currentPage = 4;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
}
