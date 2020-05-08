import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-nuevotab',
  templateUrl: './nuevotab.page.html',
  styleUrls: ['./nuevotab.page.scss'],
})
export class NuevotabPage implements OnInit {

  message = "hola como estas";

  constructor(public serviciox: NamesService) { }

  ngOnInit() {
    this.doSomething();
  }

  doSomething(){
    this.serviciox.getName().subscribe(exito => {
      this.message = this.message + exito + "?";
    }, err => {
      //manejo de error
    }, final => {

    });

  }

}
