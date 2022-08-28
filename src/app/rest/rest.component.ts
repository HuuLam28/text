import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RestService } from './rest.service';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe(res) => {
      this.users = res;
    }

    }
  }

}
function res(res: any) {
  throw new Error('Function not implemented.');
}

