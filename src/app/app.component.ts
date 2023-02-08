import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'paginator';
  currentPage: number = 1;
  total: number = 0;

  constructor(private readonly productsService: ProductService) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(product => {
      console.log(product)
    })
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
