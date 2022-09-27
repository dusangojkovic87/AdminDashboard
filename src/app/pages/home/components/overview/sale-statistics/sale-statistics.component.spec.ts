import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleStatisticsComponent } from './sale-statistics.component';

describe('SaleStatisticsComponent', () => {
  let component: SaleStatisticsComponent;
  let fixture: ComponentFixture<SaleStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
