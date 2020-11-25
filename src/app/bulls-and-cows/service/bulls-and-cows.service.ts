import {Injectable} from '@angular/core';
import {CryptoService} from '../../service/crypto.service';
import {StringToNumberArrayPipe} from '../pipe/string-to-number-array.pipe';

@Injectable()
export class BullsAndCowsService {

  private number: string[];

  constructor(
    private cryptoService: CryptoService,
    private pipe: StringToNumberArrayPipe
  ) {
    const set = new Set<string>();
    while (set.size < 4) {
      set.add(this.cryptoService.encrypt(Math.floor(Math.random() * 10)));
    }
    this.number = [...set];
    // console.log(this.number);
  }

  getBulls(textAnswer: string): number {
    const answer = this.pipe.transform(textAnswer);
    // console.log(answer.map(this.cryptoService.encrypt));
    let result = 0;
    for (let i = 0; i < answer.length; i++) {
      if (this.cryptoService.encrypt(answer[i]) === this.number[i]) {
        result++;
      }
    }
    return result;
  }

  getCows(textAnswer: string): number {
    const answer = this.pipe.transform(textAnswer);
    let result = 0;
    for (let i = 0; i < answer.length; i++) {
      const encryptAnswer = this.cryptoService.encrypt(answer[i]);
      if (this.number.includes(encryptAnswer) && encryptAnswer !== this.number[i]) {
        result++;
      }
    }
    return result;
  }
}
