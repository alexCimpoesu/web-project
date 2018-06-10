import { AuthService } from './../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() usuario: String;

  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    console.log(localStorage.getItem('usuario'));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}
}
