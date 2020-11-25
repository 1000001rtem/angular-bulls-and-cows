import {Component, Input} from '@angular/core';
import {Result} from '../model/Result';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    trigger('cowsAnimation', [
      transition('* => *', [
        query('img', style({transform: 'translateX(+900%)'}), {optional: true}),
        query('img',
          stagger('600ms', [
            animate('900ms', style({transform: 'translateX(0) rotate(360deg)'}))
          ]), {optional: true})
      ])
    ]),
    trigger('bullsAnimation', [
      transition('* => *', [
        query('img', style({transform: 'translateX(+900%)'}), {optional: true}),
        query('img',
          stagger('600ms', [
            animate('900ms', style({transform: 'translateX(0) rotate(360deg)'}))
          ]), {optional: true})
      ])
    ]),
  ]
})
export class ResultComponent {

  @Input()
  result: Result;

  constructor() {
  }
}
