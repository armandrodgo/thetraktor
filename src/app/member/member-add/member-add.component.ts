import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/shared/classes/member';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  public member: Member;

  public userData: Member = {
    id: this.uniqueID(),
    nombre: '',
    genero: '',
    avatar: '',
    activo: '',
    email: '',
    direccion: '',
    poblacion: '',
    telefono: '',
    description: ''
  };
  constructor(private apiService: ApiService, private router: Router) { }

  private uniqueID() {    const thisMS: number = Date.now();
                          const shake = Math.random();
                          let unique: string = Math.pow(thisMS, shake).toString();
                          unique = unique.toString().replace('.', thisMS.toString());
                          return unique; }
  ngOnInit() {
  }
  addMember() {
    this.member = Object.assign({}, this.userData);
    this.apiService.addMember$(this.member)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['/members', id]);
      },
      (err) => {console.log(err); });
  }

}
