import {Component, OnInit} from '@angular/core';
import {BullsAndCowsService} from './service/bulls-and-cows.service';
import {Router} from '@angular/router';
import {Result} from './model/Result';

@Component({
  selector: 'app-bulls-and-cows',
  templateUrl: './bulls-and-cows.component.html',
  styleUrls: ['./bulls-and-cows.component.css'],
  providers: [{provide: BullsAndCowsService, useClass: BullsAndCowsService}]
})
export class BullsAndCowsComponent implements OnInit {

  answer: string;
  result: Result;
  isGameOver: boolean;

  constructor(
    private router: Router,
    private service: BullsAndCowsService
  ) {
    this.result = {bulls: 0, cows: 0};
    this.isGameOver = false;
  }

  play(answer: string): void {
    const bulls = this.service.getBulls(answer);
    if (bulls === 4) {
      console.log('win');
      this.isGameOver = true;
    }
    const cows = this.service.getCows(answer);
    this.result = {cows, bulls};
  }

  ngOnInit(): void {
  }


}
