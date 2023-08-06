import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    this.auth.logout();
  }

  initPedidos() {
    this.router.navigate(['pedidos']);
  }

}