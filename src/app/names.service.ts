import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor() { }

  getName(){
    return "Fernando";
  }
}
