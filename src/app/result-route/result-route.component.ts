import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ClickerService } from '../services/clicker.service';

@Component({
  selector: 'app-result-route',
  templateUrl: './result-route.component.html',
  styleUrls: ['./result-route.component.scss']
})
export class ResultRouteComponent implements OnInit {

  users

  constructor(
    public clicker: ClickerService,
    public auth: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users = this.auth.getUsers();
  }

}
