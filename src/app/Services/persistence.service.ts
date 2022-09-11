import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('coud not save to local storage!', error);
    }
  }

  get(key: string): any {
    try {
      let data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.log('error getting token from local storage');

      return null;
    }
  }
}
