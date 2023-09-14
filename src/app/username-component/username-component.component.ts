import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username-component.component.html',
  styleUrls: ['./username-component.component.css']
})
export class UsernameComponentComponent implements OnInit {
  allowNewUsername: boolean = false
  usernameStatus: string = ''
  usernameId: string = Math.random().toString()
  username: string = ''

  constructor() {
    setTimeout(() => {
      this.allowNewUsername = true
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateUsername() {
    this.usernameStatus = this.username
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value
  }
}
