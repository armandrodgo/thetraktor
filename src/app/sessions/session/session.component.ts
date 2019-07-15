import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/shared/classes/session';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  public sesion: Session;
  public identifier: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private routes: Router) {

   }


  ngOnInit() {
    this.route.params.subscribe(miParams => {this.identifier = miParams.id; });
    this.apiService.getSession$(this.identifier).subscribe(e => this.sesion = e);
  }

}
