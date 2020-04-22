import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.scss']
})
export class LoginRouteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private auth: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const user = {
      username: this.form.value.username
    }

    this.auth.login(user);
    this.router.navigate(['play']);
  }

}
