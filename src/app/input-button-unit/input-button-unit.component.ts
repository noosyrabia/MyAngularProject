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

    changeTitle(newTitle : string): void {
      console.log("avant change title");
      this.title = newTitle;
      console.log("après change title")
  }
  getInputValue(event: Event): string {
    console.log(event);
    return (event.target as HTMLInputElement).value;
  }

}