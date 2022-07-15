import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductFacade} from "../+state/product.facade";

@Component({
  selector: 'navigation-demo-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductLayoutComponent implements OnInit {

  product$ = this.productFacade.product$;

  constructor(
    private productFacade: ProductFacade
  ) {
  }

  ngOnInit(): void {}

  updateProduct() {

  }
}