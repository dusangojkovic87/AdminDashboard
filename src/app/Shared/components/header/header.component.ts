import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { toggleProfileModalAction } from '../../sharedActions/header.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.headerState.modalIsOpen)
      .subscribe((data) => {
        this.isModalOpen = data;
      });
  }

  toggleModal() {
    this.store.dispatch(toggleProfileModalAction());
  }
}
