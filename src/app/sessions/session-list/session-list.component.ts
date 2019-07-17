import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions$: Observable<any>;
  sessions;
  data: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getSessions();
    /*this.routeOut.navigateByUrl('/RefrshComponent', { skipLocationChange: true }).then(() =>
     this.routeOut.navigate(['/member-list']));*/
  }
  

  getSessions() {
    this.apiService.getSessions$().subscribe(e => this.sessions = e);
  }

  deleteSession(id) {
    this.apiService.deleteSession$(id).subscribe(data => {
      this.data = data;
      this.getSessions();

    });
  }

}
