import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  reloadComponent = async () => {
    console.log(this.router.url);
    if (this.router.url === '/bulls-and-cows') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const currentUrl = this.router.url + '?';
      this.router.navigateByUrl(currentUrl).then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
    } else {
      await this.router.navigateByUrl('bulls-and-cows');
    }
  };

}
