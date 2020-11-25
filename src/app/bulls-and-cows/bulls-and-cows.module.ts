import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BullsAndCowsComponent} from './bulls-and-cows.component';
import {FormsModule} from '@angular/forms';
import {GameOverComponent} from './game-over/game-over.component';
import {ResultComponent} from './result/result.component';
import {InputComponent} from './input/input.component';
import {StringToNumberArrayPipe} from './pipe/string-to-number-array.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [BullsAndCowsComponent, GameOverComponent, ResultComponent, InputComponent, StringToNumberArrayPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  exports: [BullsAndCowsComponent],
  providers: [StringToNumberArrayPipe]
})
export class BullsAndCowsModule {
}
