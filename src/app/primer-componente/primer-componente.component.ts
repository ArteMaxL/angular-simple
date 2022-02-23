import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  age: number;
  names: Array<string>;

  constructor() {
    this.age = 15;
    this.names = ['Ana', 'Marcela', 'Marcia'];
  }

  ngOnInit(): void {
    console.log("First component is loaded");
  }

  increaseAge() {
    this.age++;
    console.log(`Age increased!. Your actual age is ${this.age}`);
  }

  decreaseAge() {
    if (this.age >= 1) {
      this.age--;
      console.log(`Age decreased!. Your actual age is ${this.age}`);
    }

  }

}
