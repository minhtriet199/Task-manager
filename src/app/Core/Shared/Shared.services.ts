import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sidebarOpen = false;

  constructor() { }

  getSidebarOpen(): boolean {
    return this.sidebarOpen;
  }

  setSidebarOpen(value: boolean): void {
    this.sidebarOpen = value;
  }
}
