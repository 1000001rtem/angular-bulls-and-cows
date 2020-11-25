import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output()
  onAnswer = new EventEmitter<string>();

  constructor() {
  }

  answer(answer: string): void {
    this.onAnswer.emit(answer);
  }
}
