import { Component, OnInit } from '@angular/core';
import { ClickerService } from '../services/clicker.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-play-route',
  templateUrl: './play-route.component.html',
  styleUrls: ['./play-route.component.scss']
})
export class PlayRouteComponent implements OnInit {

  time: number;
  // count: number;
  isStarted: boolean;

  constructor(
    public clicker: ClickerService,
    public auth: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.time = 10;
    // this.count = 0;
    this.isStarted = false;
  }

  onClick() {
    this.clicker.increment();
    // console.log(this.clicker.getCount());
  }

  onStart() {
    this.isStarted = !this.isStarted;
    this.tick();
  }

  tick() {
    if (this.time > 0) {
      setTimeout(() => {
        this.time--;
        this.tick();
      }, 1000)
    } else {
      this.auth.saveResult(this.auth.getUser());
      this.router.navigate(['result']);
    }
  }

}
