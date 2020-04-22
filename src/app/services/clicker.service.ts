import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {

  count: number;

  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  resetCount() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}
