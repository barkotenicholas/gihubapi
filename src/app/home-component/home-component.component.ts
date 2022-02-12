import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  private githubUserQuery!:string;
  private user!:User;
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }


  public searchUser(){
    this.httpService.getProfileInfo(this.githubUserQuery).subscribe((profile:User)=>{
      this.user = profile;
      console.log(this.user);
    });

  }

}
