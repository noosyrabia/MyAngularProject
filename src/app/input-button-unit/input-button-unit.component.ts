import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title ='Hello World!'; 
  // constructor() { 
  //   this.title = 'I Love Angular';
  // }

  constructor() { 
    console.log("constructeur")
    this.changeTitle('My First Angular App')
    ;
  }

  changeTitle(newTitle : string): void {
    console.log("avant change title");
    this.title = newTitle;
    console.log("après change title")
  
}

}