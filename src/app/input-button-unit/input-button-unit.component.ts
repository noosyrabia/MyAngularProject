import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title ='Hello World!'; 

  // constructor() { 
  //   setTimeout(() => {
  //     this.title = 'This is not the title you are looking for';
  //   }, 3000);
  // } 

  // constructor() { 
  //   this.title = 'I Love Angular';
  // }

//   constructor() { 
//     console.log("constructeur")
//     this.changeTitle('My First Angular App')
//     ;
//   }

// generateTitle(): string {
//   return 'This title was generated by a method.';
// }


    changeTitle(newTitle : string): void {
      console.log("avant change title");
      this.title = newTitle;
      console.log("après change title")
  }
  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }




}