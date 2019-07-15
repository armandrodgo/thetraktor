import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [MemberComponent,
    MemberListComponent,
    MemberAddComponent]
})
export class MemberModule { }
