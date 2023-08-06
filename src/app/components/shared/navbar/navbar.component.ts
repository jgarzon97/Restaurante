import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit (): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      if(isAuthenticaed){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }
}
