import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members$: Observable<any>;
  members;
  data: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.apiService.getMembers$().subscribe(e => this.members = e);
  }

  deleteMember(id) {
    this.apiService.deleteMember$(id).subscribe(data => {
      this.data = data;
      this.getMembers();

    });
  }

}
