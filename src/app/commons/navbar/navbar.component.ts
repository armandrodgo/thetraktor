import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  public isLogged = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    /* Nos suscribimos con la funcion para escuchar si la variable isLogged ha cambiado */
    this.onCheckUser();

  }
  public onLogout(): void {
    this.authService.logoutUser();
    this.isLogged = false;
    this.router.navigate(['/home']);
  }

  public onCheckUser(): void {
    this.authService.isLogged.subscribe(value => this.isLogged = value);
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }


}
