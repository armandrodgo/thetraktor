import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberComponent } from './member/member/member.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { MemberAddComponent } from './member/member-add/member-add.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionComponent } from './sessions/session/session.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  {path: 'sessions', component: SessionListComponent, canActivate: [AuthGuard] },
  {path: 'users/login', component: LoginComponent },
  {path: 'users/register', component: RegisterComponent },
  {path: 'members/:id', component: MemberComponent},
  {path: 'session/:id', component: SessionComponent},
  {path: 'addMember', component: MemberAddComponent},
  {path: '**', component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
