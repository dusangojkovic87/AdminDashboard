import { Component, OnInit } from '@angular/core';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  p: number = 0;

  public productList: Array<Product> = [
    {
      id: 1,
      image: '/images/products/apple.jpg',
      productName: 'product1',
      category: 'fruits',
      price: 25,
      stock: 24,
      status: 'pending',
      discount: 10,
      details: 'some text',
      published: true,
    },
    {
      id: 2,
      image: '/images/products/apple.jpg',
      productName: 'product2',
      category: 'vegetable',
      price: 25,
      stock: 24,
      status: 'pending',
      discount: 10,
      details: 'some text',
      published: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
