import { Injectable } from '@angular/core';
import { ClickerService } from './clicker.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  activeUser
  users

  constructor(
    public clicker: ClickerService
  ) {

    this.users = []
  }

  login(user) {
    localStorage.setItem('activeUser', JSON.stringify(user));
  }

  saveResult(user) {
    if (this.isUserNew(user)) {
      this.addUser(user);
    } else {
      this.updateUsers(user);
    }
  }


  getUsers() {
    if (localStorage.getItem('users') === null) {
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
    }

    return this.users;
  }

  addUser(user) {
    const newUser = {
      username: user.username,
      results: [
        {
          date: new Date(),
          score: this.clicker.getCount()
        }
      ]
    }

    this.users.unshift(newUser);

    // Add to local storage
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsername() {
    return JSON.parse(localStorage.getItem('activeUser')).username;
  }
  getUser() {
    return JSON.parse(localStorage.getItem('activeUser'));
  }

  isUserNew(user) {
    let isNew = true;
    this.getUsers().forEach( item => {
      if (item.username === user.username) {
        isNew = false;
      }
    })

    return isNew;
  }

  updateUsers(user) {
    this.getUsers();

    this.users.forEach( (item, index) => {
      if (item.username === user.username) {

        const newResult = {
          date: new Date(),
          score: this.clicker.getCount()
        }

        item.results.unshift(newResult);

      }
    })

    localStorage.setItem('users', JSON.stringify(this.users));
  }

}
