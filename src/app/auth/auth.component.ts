import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin() {
    this.authService.signin().then(
      () => {
        console.log('Sign in successful!');
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignout() {
    this.authService.signout();
  }

}
