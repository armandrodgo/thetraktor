import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


@NgModule({
  declarations: [NavbarComponent, HomeComponent, NotfoundComponent, SideNavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavbarComponent, HomeComponent, NotfoundComponent, SideNavbarComponent]
})
export class CommonsModule { }
