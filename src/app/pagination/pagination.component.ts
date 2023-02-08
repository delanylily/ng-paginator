import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['pagination.component.less']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() perPage: number = 10;
  @Output() changePage = new EventEmitter<number>();
  pages: Array<number> = [];

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.perPage);
    this.pages = this.range(1, pagesCount);
    console.log(this.pages);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(el => el + start)
  }
}
