import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/shared/classes/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  public member: Member;
  public identifier: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private routes: Router) {

   }


  ngOnInit() {
    this.route.params.subscribe(miParams => {this.identifier = miParams.id; });
    this.apiService.getMember$(this.identifier).subscribe(e => this.member = e);
  }

}
