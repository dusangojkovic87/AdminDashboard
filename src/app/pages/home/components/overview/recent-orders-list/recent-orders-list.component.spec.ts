import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrdersListComponent } from './recent-orders-list.component';

describe('RecentOrdersListComponent', () => {
  let component: RecentOrdersListComponent;
  let fixture: ComponentFixture<RecentOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOrdersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
