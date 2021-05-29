import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public url :String
  public canRegister:Boolean;

  constructor() {
    this.url="https://localhost:44313/api/Company";
    this.canRegister=false;
  }
}
