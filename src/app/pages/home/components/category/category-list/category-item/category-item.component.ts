import { Component, Input, OnInit } from '@angular/core';
import { CategoryData } from '../../types/CategoryData';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() category!: CategoryData;

  constructor() {}

  ngOnInit(): void {}
}
